const router = require('express').Router();
const {search, timeline,tweet} = require('../controllers/TwitterController.js');

router.get('/search', search);
router.get('/timeline', timeline);
router.post('/tweet', tweet);
module.exports = router;
