const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");

router.get("/", async (req, res, next) => {
  try {
    console.log("Exercise Route Get all");
    const exercises = await db.Exercise.findAll();
    res.json(exercises);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/random", async (req, res, next) => {
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

// router.use((err, req, res, next) => {
//     if (err.message === "Invalid ID") {
//       console.log(err.message);
//       res.sendStatus(err.status);
//     } else {
//       console.log(err.message);
//       next(err);
//     }
//   });
