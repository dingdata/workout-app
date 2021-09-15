const request = require("supertest");
const express = require("express");
const app = express();
const db = require("../../db/models/index");
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
    };
    const exercise2 = {
      duration: 10,
      intensity: "Moderate",
      exerciseType: "Yoga",
      source: "youtube",
      tag: "iV8JGYFnOqk",
      title: "Side Abs and Muffin Top",
    };
    const exercise3 = {
      duration: 10,
      intensity: "High",
      exerciseType: "Cardio",
      source: "youtube",
      tag: "iV8JGYFnOqk",
      title: "Side Abs and Muffin Top",
    };
    await db.Exercise.create(exercise1);
    await db.Exercise.create(exercise2);
    await db.Exercise.create(exercise3);
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

      expect(exercises.length).toBe(3);
    });
  });

  describe("POST /filterByExerciseType", () => {
    it("should return 1 exerciseType Yoga", async () => {
      const exerciseBody = {
        exerciseType: ["Yoga", "Cardio"],
      };
      const { body: exercise } = await request(app)
        .post("/exercises/filterByExerciseType")
        .send(exerciseBody)
        .expect(200);

      console.log(exercise);

      expect(exercise).not.toBeNull();
      expect(exercise[0].exerciseType).toEqual("Yoga");
      expect(exercise[1].exerciseType).toEqual("Cardio");
    });
  });
});
