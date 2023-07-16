const express = require("express");
const {
  signInUser,
  loginUser,
  activeUser,
} = require("../controller/user.controller");
const { formValidation } = require("../controller/validation");
var router = express.Router();

/* GET users listing. */
router.post("/signin", formValidation, signInUser);
router.get("/login", formValidation, loginUser);
router.get("/activate/:token", activeUser);

module.exports = router;
