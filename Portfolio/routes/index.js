var express = require('express');
var router = express.Router();

/* GET home page. Both / and /home render the index view */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/*GET About Me page: renders views/aboutme.ejs, title is used by navbar*/
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/*GET My Projects page: renders views/projects.ejs, title is used by navbar*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

/*GET Contact Me page: renders views/contactme.ejs, title is used by navbar*/
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

// Make routes available to app.js
module.exports = router;
