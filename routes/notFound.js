exports.notFoundPage = (req, res, next) => {
  req.err = {
    message: "Page not found",
    code: 404,
  };
  next();
};
