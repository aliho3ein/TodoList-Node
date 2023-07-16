const Todo = require("./todo.schema");
const User = require("./user.schema");

exports.getList = async (id) => {
  try {
    const list = await Todo.find({ userId: id });
    return list;
  } catch {
    throw new Error();
  }
};

exports.createTodoItem = async (req, userId, title) => {
  try {
    const user = await User.findById(userId);

    if (!user.active) {
      // pls verify ur account
      console.log("pls verify ur account");

      req.err = {
        message: "pls verify ur account",
        code: 422,
      };

      throw new Error();
    }

    const newItem = await Todo.create({ userId, title });
    return newItem;
  } catch {
    throw new Error();
  }
};

exports.getItem = async (id) => {
  try {
    const todo = await Todo.findById(id);
    return todo;
  } catch {
    throw new Error();
  }
};

exports.updateItem = async (id, title) => {
  try {
    const todo = await Todo.findByIdAndUpdate(id, title, { new: true });
    return todo;
  } catch {
    throw new Error();
  }
};

exports.removeItem = async (id) => {
  try {
    const todo = await Todo.findByIdAndRemove(id);
    return todo;
  } catch {
    throw new Error();
  }
};
