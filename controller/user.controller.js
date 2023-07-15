const { createToken, validateToken } = require("../lib/token");
const {
  createUser,
  checkUserValidation,
  activeAccount,
} = require("../model/user.model");
const { sendActivateMail } = require("./../lib/mail");

exports.signInUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const data = await createUser({ name, email, password });
    const token = await createToken(data, "secret_key");
    sendActivateMail(data._id, email);
    res.status(201).send(token);
  } catch {
    next();
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await checkUserValidation(email, password);

    if (!user) {
      throw new Error("user not exist");
    }

    const token = await createToken(user, "secret_key");
    res.status(200).send(token);
  } catch {
    next();
  }
};

exports.activeUser = async (req, res, next) => {
  try {
    const { token } = req.params;
    const result = await activeAccount(token);
    res.status(200).send(token);
  } catch {
    next();
  }
};
