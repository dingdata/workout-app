const express = require("express");
const db = require("./db/models/index");
const path = require("path"); // for deployment to client
const apiRouter = express.Router(); // for deployment to client

const app = express();

app.use(express.json());
db.sequelize.sync();

const cors = require("cors");
app.use(
  cors({
    origin: process.env.ORIGIN_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", apiRouter); // for deployment to client

apiRouter.get("/", function (req, res) {
  res.send("Hello World!");
});
const exercisesRouter = require("./src/routes/exercises.route");
const usersRouter = require("./src/routes/users.route");

apiRouter.use("/exercises", exercisesRouter);

apiRouter.use("/users", usersRouter);

app.use(express.static(path.resolve("client", "build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("client", "build", "index.html"))
);

// default error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
