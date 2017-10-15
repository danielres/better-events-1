var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    event: [
      {
        id: 'dhk38s2',
        name: 'Event 1',
        subjects: [
          { name: 'Subject 1' },
          { name: 'Subject 2' },
          { name: 'Subject 3' },
          { name: 'Other' },
        ],
      },
    ],
  });
});

module.exports = router;
