const express = require("express");
const {
  getTodoList,
  createTodo,
  getSingleTodo,
  updateSingleTodo,
  removeSingleTodo,
  checkTokenValidation,
} = require("../controller/todo.controller");
const { check } = require("express-validator");

const router = express.Router();

router
  .route("/")
  .post(check("title").trim().escape(), checkTokenValidation, createTodo)
  .get(checkTokenValidation, getTodoList);

router
  .route("/:id")
  .get(getSingleTodo)
  .put(updateSingleTodo)
  .delete(removeSingleTodo);

module.exports = router;
