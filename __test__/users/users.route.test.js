const request = require("supertest");
const express = require("express");
const app = express();
const db = require("../../db/models/index");
app.use(express.json());

const usersRouter = require("../../src/routes/users.route");

app.use("/users", usersRouter);

const jwt = require("jsonwebtoken");

describe("Users", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    jest.spyOn(jwt, "sign");
  });

  afterAll(async () => {
    await db.User.truncate({ cascade: true });
    await db.sequelize.close();
  });

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

      const { body: actualUser, header } = await request(app)
        .post("/users")
        .send(newUser)
        .expect(201);

      expect(actualUser).toMatchObject(expectedUser);
      expect(jwt.sign).toHaveBeenCalled();
      expect(header["set-cookie"]).not.toBeUndefined();
    });
  });
});
