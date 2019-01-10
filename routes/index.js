var express = require('express');
var router = express.Router();

// preaparing routing pages.
const INDEX = 'public/pages/index';
const ABOUT = 'public/pages/about-us';
const BLOG = 'public/pages/blog';
const CONTACT = 'public/pages/contact';
const GALLERY = 'public/pages/gallery';
const SERVICE = 'public/pages/service';
const EVENTS = 'public/pages/events';
const TEAM = 'public/pages/team';
const PROJECT = 'public/pages/project';
const ELEMENTS = 'public/pages/elements';
const ELEMENTSBLOG = 'public/pages/elementsBlog';
const ELEMENTSGALLERY = 'public/pages/elementsGallery';
const ELEMENTSSERVICE = 'public/pages/elementsService';
const EROOR404 = '404';

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

// team page
router.get('/team', function(req, res) {
    res.render(TEAM, {
        domain: url,
        activeStatus: 'team',
        title: "Team | OOUG"
    });
});

// project page
router.get('/project', function(req, res) {
    res.render(PROJECT, {
        domain: url,
        activeStatus: 'project',
        title: "Project | OOUG"
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
router.get('/gallery', function(req, res) {
    res.render(GALLERY, {
        domain: url,
        activeStatus: 'gallery',
        title: "Gallery | OOUG"
    });
});

// service page
router.get('/service', function(req, res) {
    res.render(SERVICE, {
        domain: url,
        activeStatus: 'service',
        title: "Service | OOUG"
    });
});

// events page
router.get('/events', function(req, res) {
    res.render(EVENTS, {
        domain: url,
        activeStatus: 'events',
        title: "Events | OOUG"
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


// elements blog page
router.get('/elementsBlog', function(req, res) {
    res.render(ELEMENTSBLOG, {
        domain: url,
        activeStatus: 'elements',
        title: "Elements | Blog | OOUG"
    });
});


// elements Gallery page
router.get('/elementsGallery', function(req, res) {
    res.render(ELEMENTSGALLERY, {
        domain: url,
        activeStatus: 'elements',
        title: "Elements | Gallery | OOUG"
    });
});


// elements page
router.get('/elementsService', function(req, res) {
    res.render(ELEMENTSSERVICE, {
        domain: url,
        activeStatus: 'elements',
        title: "Elements | Service | OOUG"
    });
});

/* GET 404 page. */
router.get('/*', function(req, res) {
    res.status(404).render(EROOR404);
});

module.exports = router;