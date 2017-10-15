var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    event: {
      id: 'dhk38s2',
      name: 'Event 1',
      subjects: [
        { id: 'sd2kj4k', name: 'Subject 1' },
        { id: 'llkl23p', name: 'Subject 2' },
        { id: 'kadn3fv', name: 'Subject 3' },
        { id: 'l349dfk', name: 'Other' },
      ],
    },
  });
});

module.exports = router;
