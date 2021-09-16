const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    console.log("req", req);

    console.log("req.cookies", req.cookies);
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
