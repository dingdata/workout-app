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

router.post("/filterByPreferences", async (req, res, next) => {
  try {
    console.log(`Request Body ${req}`);
    const exercises = await db.Exercise.findAll({
      where: {
        exerciseType: {
          [db.Sequelize.Op.in]: req.body.exerciseType,
        },
        duration: {
          [db.Sequelize.Op.lte]: req.body.duration,
        },
        // needEquipment: {
        //   [db.Sequelize.Op.is]: req.body.needEquipment,
        // },
      },
      raw: true,
    });
    res.json(exercises);
  } catch (err) {
    next(err);
  }
});

router.get("/exerciseByUser", async (req, res, next) => {
  try {
    const attributes = [
      [
        db.sequelize.fn("date_trunc", "WEEK", db.sequelize.col("createdAt")),
        "trunc",
      ],
      [db.sequelize.fn("COUNT", db.sequelize.col("createdAt")), "count"],
    ];

    const group = [
      db.sequelize.fn("date_trunc", "WEEK", db.sequelize.col("createdAt")),
    ];
    const order = [
      [
        db.sequelize.fn("date_trunc", "WEEK", db.sequelize.col("createdAt")),
        "DESC",
      ],
    ];
    const query = { attributes, group, order, limit: "5" };

    const exercises = await db.UserExercise.findAndCountAll(query);
    res.json(exercises.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
