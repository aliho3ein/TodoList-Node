const { createToken } = require("../lib/token");
const { createUser, checkUserValidation } = require("../model/user.model");

exports.signInUser = (req, res, next) => {
  const { name, email, password } = req.body;

  createUser({ name, email, password })
    .then((data) => {
      res.send(data._id);
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

    res.status(200).send(user);
  } catch {
    next();
  }
};
