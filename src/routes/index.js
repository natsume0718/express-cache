var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Cache-Control', 'private')
  res.render('index', { title: 'Express' });
});

router.get('/second', function(req, res, next) {
  res.append('Cache-Control', ['no-store', 'max-age=0'])
  res.render('second', { title: 'Second' });
});

module.exports = router;
