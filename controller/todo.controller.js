const { validateToken } = require("../lib/token");
const {
  getList,
  createTodoItem,
  getItem,
  updateItem,
  removeItem,
} = require("../model/todo.model");

require("dotenv").config();
const config = require("./../config/environment");

exports.checkTokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.auth;
    const user = await validateToken(token, process.env.API_KEY);
    return next(user.payload._id);
  } catch {
    res.status(400).send("Invalid Token");
  }
};

exports.getTodoList = (authID, req, res, next) => {
  getList(authID)
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};

exports.createTodo = (authID, req, res, next) => {
  const { title } = req.body;

  createTodoItem(req, authID, title)
    .then((resolve) => res.status(201).send(resolve))
    .catch(() => {
      // req.err = {
      //   message: "pls verify ur account",
      //   code: 422,
      // };
      // next();

      res.status(422).send("pls verify ur account");
    });
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

  updateItem(id, { title })
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};

exports.removeSingleTodo = (req, res, next) => {
  const { id } = req.params;

  removeItem(id)
    .then(() => res.status(204).send("Item Deleted"))
    .catch(() => next());
};

exports.setTodoAsDone = (req, res, next) => {
  const { id } = req.params;

  updateItem(id, { done: true })
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};

exports.setTodoInProcess = (req, res, next) => {
  const { id } = req.params;

  updateItem(id, { inProcess: true })
    .then((resolve) => res.status(200).send(resolve))
    .catch(() => next());
};
