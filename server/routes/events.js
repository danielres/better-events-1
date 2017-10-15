var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('/events');
  res.json({ event: [{ name: 'Event 1' }] });
});

module.exports = router;
