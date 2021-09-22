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

router.get(
  "/userExerciseCountByWeek/:noOfWeek",
  auth,
  async (req, res, next) => {
    try {
      let userId = req.user.userId;
      let noOfWeek = parseInt(req.params.noOfWeek);
      const where = { UserId: userId };

      const attributes = [
        [
          db.sequelize.fn(
            "date_trunc",
            "WEEK",
            db.sequelize.col("UserExercise.createdAt")
          ),
          "weekStart",
        ],
        [
          db.sequelize.fn("COUNT", db.sequelize.col("UserExercise.createdAt")),
          "count",
        ],
        [
          db.sequelize.fn(
            "sum",

            db.sequelize.col("Exercise.duration")
          ),
          "duration",
        ],
      ];

      const include = [
        { model: db.User, attributes: [] },
        { model: db.Exercise, attributes: [] },
      ];
      const group = [
        db.sequelize.fn(
          "date_trunc",
          "WEEK",
          db.sequelize.col("UserExercise.createdAt")
        ),
      ];
      const order = [
        [
          db.sequelize.fn(
            "date_trunc",
            "WEEK",
            db.sequelize.col("UserExercise.createdAt")
          ),
          "DESC",
        ],
      ];
      const query = {
        where,
        attributes,
        include,
        group,
        order,
        limit: noOfWeek,
      };

      const exercises = await db.UserExercise.findAndCountAll(query);

      const formatDateToMonday = (date) => {
        return `${date.getDate()}/${date.getMonth() + 1}`;
      };
      let mondayArray = [];
      let resultArray = [];

      for (i = 0; i < noOfWeek; i++) {
        let currentDate = new Date();
        let firstday = new Date(
          currentDate.setDate(
            currentDate.getDate() - currentDate.getDay() + 1 - i * 7
          )
        ).toUTCString();

        mondayArray.push(formatDateToMonday(new Date(firstday)));
      }

      mondayArray.map((monday) => {
        let targetRow = exercises.rows.filter(
          (row) => formatDateToMonday(row.dataValues.weekStart) == monday
        );

        if (targetRow.length > 0) {
          console.log(targetRow[0].dataValues);
          resultArray.push({
            weekStart: monday,
            count: targetRow[0].dataValues.count,
            totalDuration: targetRow[0].dataValues.duration,
          });
        } else {
          resultArray.push({
            weekStart: monday,
            count: 0,
            totalDuration: 0,
          });
        }
      });

      res.json(resultArray);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
