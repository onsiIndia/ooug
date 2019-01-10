const express = require('express');
const router = express.Router();

// preaparing routing pages.
const EROOR404 = '404';

/* GET home page. */
router.get('/', function(req, res) {
    res.send('dashboard');
});

/* GET 404 page. */
router.get('/*', function(req, res) {
    console.log('error');
    res.status(404).render(EROOR404);
});

module.exports = router;