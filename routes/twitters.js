const router = require('express').Router();
const {search, timeline} = require('../controllers/TwitterController.js');

router.get('/search', search);
router.get('/timeline', timeline);
module.exports = router;
