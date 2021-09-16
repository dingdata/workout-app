const request = require("supertest");
const express = require("express");
const app = express();
const db = require("../../db/models/index");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const createJWTToken = require("../../config/jwt");
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

    it("should return true if user do not exist", async () => {
      await db.User.truncate({ cascade: true });
      const newUser = {
        firstName: "ah kow",
        lastName: "tan",
        emailAddress: "ah_kow@test.com",
        password: "12345678",
      };
      const newEmailAddress = { emailAddress: newUser.emailAddress };
      const { body } = await request(app)
        .post("/users/isUniqueEmail")
        .send(newEmailAddress)
        .expect(200);
      expect(body.result).toBe(true);

      //test if exist
      const result = await db.User.create(newUser);
      console.log(result);
      const res = await request(app)
        .post("/users/isUniqueEmail")
        .send(newEmailAddress)
        .expect(200);
      expect(res.body.result).toBe(false);
    });

    it("should return user login if user enter correct credentials", async () => {
      const user = {
        emailAddress: "ah_kow@test.com",
        password: "12345678",
      };

      const expectedUser = {
        firstName: "ah kow",
        lastName: "tan",
        emailAddress: "ah_kow@test.com",
      };
      const { body: actualUser, header } = await request(app)
        .post("/users/login")
        .send(user)
        .expect(200);
      expect(actualUser).toMatchObject(expectedUser);
      expect(jwt.sign).toHaveBeenCalled();
      expect(header["set-cookie"]).not.toBeUndefined();

      const invalidUser = {
        emailAddress: "ah_kow@test.com",
        password: "22222222",
      };
      const { body: actualInvalidUser } = await request(app)
        .post("/users/login")
        .send(invalidUser)
        .expect(422);
    });
    it("should logout users", async () => {
      const { body: header } = await request(app)
        .post("/users/logout")
        .expect(200);
      expect(header["set-cookie"]).toBeUndefined();
    });
  });

  describe.only("Get /users", () => {
    it("should get logged in user", async () => {
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
        .get("/users/m2")
        .send(newUser)
        .expect(201);

      expect(actualUser).toMatchObject(expectedUser);
    });
  });
});
