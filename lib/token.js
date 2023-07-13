// lib/token.js
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

// lib/token.js
exports.createToken = async (payload, secret) => {
  const token = await sign(payload, secret);
  console.log(token);
  return token;
};
