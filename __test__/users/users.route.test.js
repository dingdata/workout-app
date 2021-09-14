const request = require("supertest");
const express = require("express");
const app = express();
app.use(express.json());

const usersRouter = require("../../src/routes/users.route");

app.use("/users", usersRouter);

describe("POST /users", () => {
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
