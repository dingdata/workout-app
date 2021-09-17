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
    if (!user) throw new Error();

    const result = await bcrypt.compare(password, user.password);
    if (!result) throw new Error();

    const token = createJWTToken(user.id);

    res.cookie("token", token, {
      expires: getJWTtokenExpiry(),
      httpOnly: true, // client-side js cannot access cookie info
      secure: true, // use HTTPS
    });

    res.status(200).json(user);
  } catch (err) {
    err.statusCode = 422;
    err.message = "Invalid email address or password.";
    next(err);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json();
  } catch (err) {
    next(err);
  }
});

router.get("/me", auth, async (req, res, next) => {
  if (req.user) {
    let id = req.user.userId;
    const user = await db.User.findOne({
      where: { id },
    });
    console.log(user);

    res.status(200).json(pick(user, ["firstName"]));
  } else {
    res.status(200).json();
  }
});

router.post("/exercises/:exerciseId", auth, async (req, res, next) => {
  try {
    // const newUser = await db.User.create(req.body);
    let exerciseId = req.params.exerciseId;
    console.log("exercises", exerciseId);

    let userId = req.user.userId;
    console.log("userId", userId);

    const userExercise = { UserId: userId, ExerciseId: exerciseId };
    console.log(userExercise);
    const createdRecord = await db.UserExercise.create(userExercise);

    console.log("created Record", createdRecord);

    res.json({ result: true });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/exercises", auth, async (req, res, next) => {
  try {
    let userId = req.user.userId;
    const completedExercises = await db.UserExercise.findAll({
      where: {
        UserId: userId,
      },
      include: [
        { model: db.User },
        { model: db.Exercise, attributes: ["title", "tag", "createdAt"] },
      ],
    });
    res.json(completedExercises);
  } catch (err) {
    console.log(err);
    next(err);
  }
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
