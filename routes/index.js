var express = require('express');
var router = express.Router();

// preaparing routing pages.
const INDEX = 'public/pages/index';
const ABOUT = 'public/pages/about-us';
const BLOG = 'public/pages/blog';
const CONTACT = 'public/pages/contact';
const ELEMENTS = 'public/pages/elements';
const GALLERY = 'public/pages/gallery';
const SERVICE = 'public/pages/service';
const EVENTS = 'public/pages/events';
const SINGLE_BLOG = 'public/pages/single-blog';

/* ============================================================
------------------------default data for website using middlevare----------------
===============================================================*/

// for domain
let url = "";
router.use('/*', function(req, res, next) {
    // to get domain 
    let host = req.hostname;
    let protocol = req.protocol;
    url = protocol + "://" + host;
    //console.log(domain);
    next();
});


/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// Home page
router.get('/', function(req, res) {
    res.render(INDEX, {
        domain: url,
        activeStatus: 'home',
        title: "ODISHA ORACLE USERS GROUP"
    });
});

// about page
router.get('/about', function(req, res) {
    res.render(ABOUT, {
        domain: url,
        activeStatus: 'about',
        title: "About | OOUG "
    });
});

// blog page
router.get('/blog', function(req, res) {
    res.render(BLOG, {
        domain: url,
        activeStatus: 'blog',
        title: "Blog | OOUG"
    });
});

// contact page
router.get('/contact', function(req, res) {
    res.render(CONTACT, {
        domain: url,
        activeStatus: 'contact',
        title: "Contact | OOUG"
    });
});

// elements page
router.get('/elements', function(req, res) {
    res.render(ELEMENTS, {
        domain: url,
        activeStatus: 'elements',
        title: "Elements | OOUG"
    });
});

// gallery page
router.get('/gallery', function (req, res) {
    res.render(GALLERY, {
        domain: url,
        activeStatus: 'gallery',
        title: "Gallery | OOUG"
    });
});

// service page
router.get('/service', function (req, res) {
    res.render(SERVICE, {
        domain: url,
        activeStatus: 'service',
        title: "Service | OOUG"
    });
});

// events page
router.get('/events', function (req, res) {
    res.render(EVENTS, {
        domain: url,
        activeStatus: 'events',
        title: "Events | OOUG"
    });
});

// single blog page
router.get('/singleBlog', function (req, res) {
    res.render(SINGLE_BLOG, {
        domain: url,
        activeStatus: 'singlBlog',
        title: "Singl Blog | OOUG"
    });
});

/* GET 404 page. */
router.get('/*', function(req, res) {
    res.status(404).render('404');
});

module.exports = router;