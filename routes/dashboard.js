var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res) {
//     res.render('page/index');
// });

/* GET 404 page. */
router.get('/*', function (req, res) {
    res.status(404).render('404');
});

module.exports = router;