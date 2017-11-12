var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var p = [];
  p.push({food: 'картошка'});

  res.render('whole', {});
});

router.post('/', function(req, res, next) {
  var data = [];

  data.push({food: req.body.food});
  json = JSON.stringify(data); //convert it back to json
  fs.writeFileSync('data/whole.json', json, 'utf8');

  res.redirect('/count');
});

module.exports = router;
