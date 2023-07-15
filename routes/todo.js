const express = require("express");
const {
  getTodoList,
  createTodo,
  getSingleTodo,
  updateSingleTodo,
  removeSingleTodo,
  checkTokenValidation,
} = require("../controller/todo.controller");

const router = express.Router();

router
  .route("/")
  .get(checkTokenValidation, getTodoList)
  .post(checkTokenValidation, createTodo);

router
  .route("/:id")
  .get(getSingleTodo)
  .put(updateSingleTodo)
  .delete(removeSingleTodo);

module.exports = router;
