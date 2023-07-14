const {
  getList,
  createTodoItem,
  getItem,
  updateItem,
  removeItem,
} = require("../model/todo.model");

exports.getTodoList = (req, res, next) => {
  const { userId } = req.body;

  getList(userId)
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};

exports.createTodo = (req, res, next) => {
  const { userId, title } = req.body;

  createTodoItem(userId, title)
    .then((resolve) => res.status(201).send(resolve))
    .catch(() => next());
};

exports.getSingleTodo = (req, res, next) => {
  const { id } = req.params;

  getItem(id)
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};

exports.updateSingleTodo = (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;

  updateItem(id, title)
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};

exports.removeSingleTodo = (req, res, next) => {
  const { id } = req.params;

  removeItem(id)
    .then(() => res.status(204).send("Item Deleted"))
    .catch(() => next());
};
