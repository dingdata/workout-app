const jwt = require("jsonwebtoken");

const getJWTSecret = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing secrets to sign JWT token");
  }
  return secret;
};

const createJWTToken = (userId) => {
  const today = new Date();
  const exp = new Date(today);

  const secret = getJWTSecret();
  exp.setDate(today.getDate() + 60); // adding days

  const payload = { userId };
  const token = jwt.sign(payload, secret, { expiresIn: "7d" });

  return token;
};

module.exports = createJWTToken;
