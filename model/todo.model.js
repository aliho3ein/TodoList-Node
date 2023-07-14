const Todo = require("./todo.schema");

exports.getList = async (id) => {
  try {
    const list = await Todo.find({ userId: id });
    return list;
  } catch {
    throw new Error();
  }
};

exports.createTodoItem = async (userId, title) => {
  try {
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
    const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
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
