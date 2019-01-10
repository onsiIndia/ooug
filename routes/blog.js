const express = require('express');
const router = express.Router();

// preaparing routing pages.
const BLOG = 'public/pages/blog';
const SINGLE = 'public/pages/blog/single';
const EROOR404 = '404';
/* ============================================================
------------------------default data for website using middlevare----------------
===============================================================*/

// for domain
let url = "";
router.use(function(req, res, next) {
    // to get domain 
    let host = req.hostname;
    let protocol = req.protocol;
    url = protocol + "://" + host;
    next();
});

/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// GET single(blog) page.
router.get('/single', function(req, res) {
    res.render(SINGLE, {
        domain: url,
        activeStatus: 'blog',
        title: "Single | Blog | OOUG"
    });
});

// GET Home(blog) page.
router.get('/', function(req, res) {
    res.render(BLOG, {
        domain: url,
        activeStatus: 'blog',
        title: "Blog | OOUG"
    });
});

/* GET 404 page. */
router.get('/*', function(req, res) {
    console.log('Error 404 @ blog');
    res.status(404).render(EROOR404);
});

module.exports = router;