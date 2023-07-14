const express = require("express");
const {
  getTodoList,
  createTodo,
  getSingleTodo,
  updateSingleTodo,
  removeSingleTodo,
} = require("../controller/todo.controller");
const router = express.Router();

router.route("/").get(getTodoList).post(createTodo);

router
  .route("/:id")
  .get(getSingleTodo)
  .put(updateSingleTodo)
  .delete(removeSingleTodo);

module.exports = router;
