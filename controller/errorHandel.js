exports.catchErrors = (req, res) => {
  const { message = "err", code = 404 } = req.err;
  res.status(code).send(message);
};
