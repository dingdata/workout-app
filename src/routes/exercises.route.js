const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");

router.get("/", async (req, res) => {
  try {
    console.log("Exercise Route Get all");
    const exercises = await db.Exercise.findOne();

    res.json(exercises);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/random", async (req, res) => {
  try {
    console.log("Exercise Route Get random");

    const exercises = await db.Exercise.findOne({
      order: db.sequelize.random(),
    });
    console.log(exercises);

    res.json(exercises);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
