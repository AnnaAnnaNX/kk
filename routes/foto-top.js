var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('foto-top', { title: 'Вид блюда сверху' });
});

router.post('/', function(req, res, next) {
  //запись новой картинки
  res.redirect('/');
});


module.exports = router;
