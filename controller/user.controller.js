const { createToken } = require("../lib/token");
const { createUser, checkUserValidation } = require("../model/user.model");

exports.signInUser = (req, res, next) => {
  const { name, email, password } = req.body;

  createUser({ name, email, password })
    .then(() => {
      res.send("hello user");
    })
    .catch(() => {
      next();
    });
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
