const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");
const createJWTToken = require("../../config/jwt");

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
    const token = createJWTToken(newUser.firstName);

    // calculation to determine expiry date - this is up to your team to decide
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = oneDay * 7;
    const expiryDate = new Date(Date.now() + oneWeek);

    // you are setting the cookie here, and the name of your cookie is `token`
    res.cookie("token", token, {
      expires: expiryDate,
      httpOnly: true, // client-side js cannot access cookie info
      secure: true, // use HTTPS
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
