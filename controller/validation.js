// middleware
const { check, validationResult } = require("express-validator");

const formValidation = [
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Error : Email is invalid"),

  check("password").escape().trim(),
  check("name").escape().trim(),
  // and call our function
  validatorRule,
];

function validatorRule(req, res, next) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  } else {
    // error
    const extractErrors = errors
      .array()
      .map((err) => ({ errorMessage: err.msg }));

    res.status(400).send({ errors: extractErrors });
  }
}

module.exports = { formValidation };
