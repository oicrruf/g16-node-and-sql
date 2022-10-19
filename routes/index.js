var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => res.send({ name: "Express with SQL" }));


module.exports = router;
