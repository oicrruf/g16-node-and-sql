var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ server: 'Express with SQL' });
});

module.exports = router;
