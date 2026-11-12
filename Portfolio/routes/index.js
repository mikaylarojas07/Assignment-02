var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'My Projects' });
});

router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
