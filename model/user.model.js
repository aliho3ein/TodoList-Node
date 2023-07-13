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

exports.checkUserValidation = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    const isPassValid = await user.authenticate(password);

    if (!isPassValid) {
      return null;
    }

    return user._id;
  } catch {
    throw new Error();
  }
};
