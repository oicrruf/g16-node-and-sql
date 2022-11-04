const timeStamp = (req, res, next) => {
  console.log(Date.now());
  next();
};

const userIsValid = (req, res, next) => {
  if (req.headers.authorization !== "Bearer 12345667890") {
    res.status(401).send({ message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = { timeStamp, userIsValid };
