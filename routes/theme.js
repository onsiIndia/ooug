const express = require('express');
const router = express.Router();

// preaparing routing pages.
const THEME = 'public/pages/theme';
const BLOG = 'public/pages/theme/blog';
const GALLERY = 'public/pages/theme/gallery';
const SINGLEBLOG = 'public/pages/theme/blogSingle';
const SERVICE = 'public/pages/theme/service';
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

// GET blog(theme) page.
router.get('/blog', function(req, res) {
    res.render(BLOG, {
        domain: url,
        activeStatus: 'theme',
        title: "Blog | Theme | OOUG"
    });
});

// GET gallery(theme) page.
router.get('/gallery', function(req, res) {
    res.render(GALLERY, {
        domain: url,
        activeStatus: 'theme',
        title: "Gallery | Theme | OOUG"
    });
});

// GET signleBlog(theme) page.
router.get('/single', function(req, res) {
    res.render(SINGLEBLOG, {
        domain: url,
        activeStatus: 'theme',
        title: "Single | Theme | OOUG"
    });
});

// GET Service(theme) page.
router.get('/service', function(req, res) {
    res.render(SERVICE, {
        domain: url,
        activeStatus: 'theme',
        title: "Service | Theme | OOUG"
    });
});

// GET MAin(theme) page.
router.get('/', function(req, res) {
    res.render(THEME, {
        domain: url,
        activeStatus: 'theme',
        title: "Theme | OOUG"
    });
});

/* GET 404 page. */
router.get('/*', function(req, res) {
    res.status(404).render(EROOR404, {
        domain: url,
        title: "Error 404 | OOUG"
    });
});

module.exports = router;