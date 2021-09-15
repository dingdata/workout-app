const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");

router.get("/", async (req, res, next) => {
  try {
    const exercises = await db.Exercise.findAll();
    res.json(exercises);
  } catch (err) {
    next(err);
  }
});

router.get("/random", async (req, res, next) => {
  try {
    const exercise = await db.Exercise.findOne({
      order: db.sequelize.random(),
    });

    res.json(exercise);
  } catch (err) {
    next(err);
  }
});

router.get("/filterByExerciseType", async (req, res, next) => {
  try {
    console.log(`Request Body ${req.body.exerciseType}`);
    const exercises = await db.Exercise.findAll({
      where: {
        exerciseType: {
          [db.Sequelize.Op.iLike]: req.body.exerciseType,
        },
      },
      raw: true,
    });
    res.json(exercises);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
