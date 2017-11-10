var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('obl-1', { title: 'Ввод точек области 3' });
});

router.post('/', function(req, res, next) {
  //запись новой картинки
  res.redirect('/');
});

module.exports = router;
