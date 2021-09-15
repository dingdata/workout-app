const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    console.log("in auth");

    console.log("in auth", req);

    console.log("in auth cookie", req.cookies.token);
    if (!req.cookies.token) {
      const err = new Error("You are not authorized");
      next(err);
    } else {
      req.user = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
      next();
    }
  } catch (err) {
    err.statusCode = 401;
    next(err);
  }
};

module.exports = {
  auth,
};
