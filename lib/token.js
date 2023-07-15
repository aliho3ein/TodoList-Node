// lib/token.js
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

exports.createToken = async (payload, secret) => {
  const token = await sign({ payload }, secret);
  return token;
};

exports.validateToken = async (token, secret) => {
  try {
    const decoded = await verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error("Invalid Token");
  }
};

// secret_key
