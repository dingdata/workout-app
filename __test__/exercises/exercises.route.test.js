const request = require("supertest");
const express = require("express");
const app = express();
const db = require("../../db/models/index");
const createJWTToken = require("../../config/jwt");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json());

const exercisesRouter = require("../../src/routes/exercises.route");
app.use("/exercises", exercisesRouter);

describe("Exercises", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });

    const exercise1 = {
      duration: 10,
      intensity: "Moderate",
      exerciseType: "Abs",
      source: "youtube",
      tag: "ZtnWJNkOy5w",
      title: "Core and Legs Band Workout",
      needEquipment: false,
    };
    const exercise2 = {
      duration: 20,
      intensity: "Moderate",
      exerciseType: "Yoga",
      source: "youtube",
      tag: "iV8JGYFnOqk",
      title: "Morning Yoga Stretch",
      needEquipment: false,
    };
    const exercise3 = {
      duration: 30,
      intensity: "High",
      exerciseType: "Cardio",
      source: "youtube",
      tag: "iV8JGYFnOqk",
      title: "Side Abs and Muffin Top",
      needEquipment: false,
    };
    const exercise4 = {
      duration: 40,
      intensity: "High",
      exerciseType: "Barre",
      source: "youtube",
      tag: "3320EhbImLY",
      title: "Flat Belly Barre",
      needEquipment: true,
    };
    await db.Exercise.create(exercise1);
    await db.Exercise.create(exercise2);
    await db.Exercise.create(exercise3);
    await db.Exercise.create(exercise4);

    const newUser = await db.User.create({
      firstName: "ah kow",
      lastName: "tan",
      emailAddress: "baba@test.com2",
      password: "12345678",
    });

    const newUserExercise1 = {
      UserId: newUser.id,
      ExerciseId: 1,
      createdAt: "08/14/2021",
      updatedAt: "08/14/2021",
    };

    const newUserExercise2 = {
      UserId: newUser.id,
      ExerciseId: 2,
      createdAt: "08/12/2021",
      updatedAt: "08/12/2021",
    };

    const newUserExercise3 = {
      UserId: newUser.id,
      ExerciseId: 3,
      createdAt: "08/19/2021",
      updatedAt: "08/19/2021",
    };
    const newUserExercise4 = {
      UserId: newUser.id,
      ExerciseId: 4,
      createdAt: "08/27/2021",
      updatedAt: "08/27/2021",
    };
    await db.UserExercise.create(newUserExercise1);
    await db.UserExercise.create(newUserExercise2);
    await db.UserExercise.create(newUserExercise3);
    await db.UserExercise.create(newUserExercise4);
  });

  afterAll(async () => {
    await db.Exercise.truncate({ cascade: true });
    await db.sequelize.close();
  });

  describe("GET /exercises/random", () => {
    it("should return 1 random video", async () => {
      const { body: exercise } = await request(app)
        .get("/exercises/random")
        .expect(200);

      expect(exercise).not.toBeNull();
      expect(exercise.tag).toBeDefined();
    });
  });

  describe("GET /exercises", () => {
    it("should return all exercises", async () => {
      const { body: exercises } = await request(app)
        .get("/exercises")
        .expect(200);

      expect(exercises.length).toBe(4);
    });
  });

  describe("POST /filterByPreferences", () => {
    it("should return 1 exerciseType Yoga", async () => {
      const exerciseBody = {
        exerciseType: ["Yoga", "Cardio"],
        duration: 100,
        needEquipment: false,
      };
      const { body: exercise } = await request(app)
        .post("/exercises/filterByPreferences")
        .send(exerciseBody)
        .expect(200);

      console.log(exercise);

      expect(exercise).not.toBeNull();
      expect(exercise[0].exerciseType).toEqual("Yoga");
      expect(exercise[1].exerciseType).toEqual("Cardio");
    });

    it("should return exercises with duration of 20 mins", async () => {
      const exerciseBody = {
        exerciseType: ["Yoga", "Cardio", "Abs"],
        duration: 20,
        needEquipment: false,
      };
      const { body: exercise } = await request(app)
        .post("/exercises/filterByPreferences")
        .send(exerciseBody)
        .expect(200);

      console.log(exercise);

      expect(exercise).not.toBeNull();
      expect(exercise.length).toEqual(2);
    });

    it("should return exercises with duration of 20 mins and exercise type Abs", async () => {
      const exerciseBody = {
        exerciseType: ["Abs"],
        duration: 20,
        needEquipment: false,
      };
      const { body: exercise } = await request(app)
        .post("/exercises/filterByPreferences")
        .send(exerciseBody)
        .expect(200);

      console.log(exercise);

      expect(exercise).not.toBeNull();
      expect(exercise[0].exerciseType).toEqual("Abs");
      expect(exercise[0].duration).toBeLessThanOrEqual(10);
    });

    // it("should return exercise with needEquipment of value true", async () => {
    //   const exerciseBody = {
    //     exerciseType: ["Yoga", "Cardio", "Abs", "Barre"],
    //     duration: 999,
    //     needEquipment: true,
    //   };

    //   const expectedExercise = {
    //     duration: 40,
    //     intensity: "High",
    //     exerciseType: "Barre",
    //     source: "youtube",
    //     tag: "3320EhbImLY",
    //     title: "Flat Belly Barre",
    //     needEquipment: true,
    //   };

    //   const { body: exercise } = await request(app)
    //     .post("/exercises/filterByPreferences")
    //     .send(exerciseBody)
    //     .expect(200);

    //   expect(exercise[0]).toMatchObject(expectedExercise);
    // });

    describe.only("get /exercises/userExerciseCountByWeek", () => {
      it("should return count of exercises completed by the user", async () => {
        const token = createJWTToken(1); //
        const response = await request(app)
          .get("/exercises/userExerciseCountByWeek")
          .set("Cookie", `token=${token}`);

        expect(response.body.length).toBe(3);

        expect(response.status).toBe(200);
      });
    });
  });
});
