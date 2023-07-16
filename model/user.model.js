const User = require("./user.schema");

exports.createUser = async (data) => {
  const { name, email, password } = data;
  try {
    const newUser = await User.create({ name, email, password });
    return newUser;
  } catch {
    throw new Error();
  }
};

exports.checkUserValidation = async (req, email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      req.err = {
        message: "user not exist",
        code: 400,
      };
      return null;
    }

    const isPassValid = await user.authenticate(password);

    if (!isPassValid) {
      req.err = {
        message: "wrong Password",
        code: 400,
      };
      return null;
    }

    return user;
  } catch {
    req.err = {
      message: "Invalid user or Password",
      code: 400,
    };
    throw new Error();
  }
};

exports.activeAccount = async (id) => {
  return User.findByIdAndUpdate(id, { active: true }, { new: true });
};
