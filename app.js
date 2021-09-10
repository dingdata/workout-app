const express = require("express");
const db = require("./db/models/index");
const path = require("path"); // for deployment to client
const apiRouter = express.Router(); // for deployment to client

const app = express();

app.use(express.json());
db.sequelize.sync();

app.use("/api", apiRouter); // for deployment to client

apiRouter.get("/", function (req, res) {
  res.send("Hello World!");
});
const trainersRouter = require("./src/routes/exercises.route");
apiRouter.use("/exercises", trainersRouter);

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
