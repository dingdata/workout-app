const express = require("express");
const router = express.Router();
const db = require("../../db/models/index");
const { auth } = require("../middlewares/auth");

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
    if (req.body.needEquipment === false) {
      const exercises = await db.Exercise.findAll({
        where: {
          exerciseType: {
            [db.Sequelize.Op.in]: req.body.exerciseType,
          },
          duration: {
            [db.Sequelize.Op.lte]: req.body.duration,
          },
        },
        order: [["needEquipment", "DESC"]],
        raw: true,
      });
      res.json(exercises);
    } else {
      const exercises = await db.Exercise.findAll({
        where: {
          exerciseType: {
            [db.Sequelize.Op.in]: req.body.exerciseType,
          },
          duration: {
            [db.Sequelize.Op.lte]: req.body.duration,
          },
          needEquipment: {
            [db.Sequelize.Op.is]: false,
          },
        },
        raw: true,
      });
      res.json(exercises);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/userExerciseCountByWeek", auth, async (req, res, next) => {
  try {
    let userId = req.user.userId;
    console.log("iser id is ", userId);

    const where = { UserId: userId };

    const attributes = [
      [
        db.sequelize.fn("date_trunc", "WEEK", db.sequelize.col("createdAt")),
        "weekStart",
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
    const query = { where, attributes, group, order, limit: "5" };

    const exercises = await db.UserExercise.findAndCountAll(query);

    console.log(exercises.rows);

    //---- Start of Testing Get Mondays-----------

    const formatDateToMonday = (date) => {
      return `${date.getDate()}/${date.getMonth() + 1}`;
    };
    let mondayArray = [];
    let resultArray = [];

    for (i = 0; i < 5; i++) {
      let currentDate = new Date();
      let firstday = new Date(
        currentDate.setDate(
          currentDate.getDate() - currentDate.getDay() + 1 - i * 7
        )
      ).toUTCString();

      mondayArray.push(formatDateToMonday(new Date(firstday))); // not for production
    }

    mondayArray.map((monday) => {
      let targetRow = exercises.rows.filter(
        (row) => formatDateToMonday(row.dataValues.weekStart) == monday
      );
      console.log(`TargetRow ${targetRow}`);
      console.log(targetRow);
      if (targetRow.length > 0) {
        resultArray.push({
          weekStart: monday,
          count: targetRow[0].dataValues.count,
        });
      } else {
        resultArray.push({
          weekStart: monday,
          count: 0,
        });
      }
    });

    res.json(resultArray);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
