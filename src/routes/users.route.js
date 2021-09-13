const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");

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
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
