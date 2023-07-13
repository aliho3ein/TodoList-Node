exports.catchErrors = (req, res) => {
  console.log("===========Error================");
  res.status(400).send("Error on user");
};
