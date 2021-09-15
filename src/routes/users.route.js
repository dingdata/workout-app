const tokenConfig = require("../constants/tokenConfig");
const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");
const createJWTToken = require("../../config/jwt");
const bcrypt = require("bcryptjs");
const { auth } = require("../middlewares/auth");
const { pick } = require("lodash");

const getJWTtokenExpiry = () => {
  // calculation to determine expiry date - this is up to your team to decide
  const oneDay = 24 * 60 * 60 * 1000;
  const duration = oneDay * tokenConfig.validityPeriod;
  const expiryDate = new Date(Date.now() + duration);
  return expiryDate;
};

router.get("/", async (req, res, next) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await db.User.create(req.body);

    //create JWT
    const token = createJWTToken(newUser.id);

    // you are setting the cookie here, and the name of your cookie is `token`
    res.cookie("token", token, {
      expires: getJWTtokenExpiry(),
      httpOnly: true, // client-side js cannot access cookie info
      secure: true, // use HTTPS
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { emailAddress, password } = req.body;
    const user = await db.User.findOne({
      where: { emailAddress },
      attributes: { include: ["password"] },
    });

    if (!user)
      return res.status(422).json({ message: "Invalid username or password." });

    const result = await bcrypt.compare(password, user.password);
    if (!result) throw new Error("Login failed");

    const token = createJWTToken(user.id);

    res.cookie("token", token, {
      expires: getJWTtokenExpiry(),
      httpOnly: true, // client-side js cannot access cookie info
      secure: true, // use HTTPS
    });

    res.status(200).json(user);
  } catch (err) {
    if (err.message === "Login failed") {
      err.statusCode = 400;
    }
    next(err);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json("Logout liao");
  } catch (err) {
    next(err);
  }
});

router.get("/me", auth, async (req, res, next) => {
  let id = req.user.userId;
  const user = await db.User.findOne({
    where: { id },
  });
  console.log(user);

  res.status(200).json(pick(user, ["firstName"]));
});

// Validations

router.post("/isUniqueEmail", async (req, res, next) => {
  try {
    const { emailAddress } = req.body;
    const existingUser = await db.User.findOne({
      where: { emailAddress },
    });
    if (existingUser) {
      res.json({ result: false });
    } else {
      res.json({ result: true });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
