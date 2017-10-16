var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:eventCode', function(req, res, next) {
  const eventCode = 'one';

  if (req.params['eventCode'] === eventCode) {
    res.json({
      event: {
        eventCode: 'one',
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
  }
});

module.exports = router;
