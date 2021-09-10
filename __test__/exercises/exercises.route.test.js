const request = require("supertest");
const express = require("express");
const app = express();
app.use(express.json());

const router = express.Router();
const exercisesRouter = require("../../src/routes/exercises.route");

app.use("/exercises", exercisesRouter); // mounting the router

describe("GET /Random exercise", () => {
  it("should return a random tag", async () => {
    const exercise = await request(app).get("/exercises/random").expect(200);
    console.log(exercise.body.tag);
    expect(exercise.body.tag).toBeDefined();
  });
});