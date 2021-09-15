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
        .post("/users/validEmail")
        .send(newEmailAddress)
        .expect(200);
      expect(body.result).toBe(true);

      //test if exist
      const result = await db.User.create(newUser);
      console.log(result);
      const res = await request(app)
        .post("/users/validEmail")
        .send(newEmailAddress)
        .expect(200);
      expect(res.body.result).toBe(false);
    });
  });
});
