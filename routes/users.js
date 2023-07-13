var express = require("express");
const { signInUser, loginUser } = require("../controller/user.controller");
const formValidation = require("../controller/validation");
var router = express.Router();

/* GET users listing. */
router.post("/signIn", formValidation, signInUser);
router.get("/login", loginUser);

module.exports = router;
