const request = require("supertest");
const express = require("express");
const app = express();
const db = require("../../db/models/index");
app.use(express.json());

const usersRouter = require("../../src/routes/users.route");

app.use("/users", usersRouter);

describe("POST /users", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    await db.User.truncate({ cascade: true });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it("should create a new user", async () => {
    const newUser = {
      firstName: "ah kow",
      lastName: "tan",
      emailAddress: "ah_kow@test.com",
      password: "12345678",
    };

    const expectedUser = {
      firstName: "ah kow",
      lastName: "tan",
      emailAddress: "ah_kow@test.com",
    };

    const { body: actualUser } = await request(app)
      .post("/users")
      .send(newUser)
      .expect(201);
    expect(actualUser).toMatchObject(expectedUser);
  });
});
