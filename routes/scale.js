var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var haveFoto = false;
  if (fs.existsSync('./public/images/foto-front')){
    haveFoto = true;
  }
  console.log(haveFoto);
  res.render('scale', { haveFoto: haveFoto });
});

router.post('/', function(req, res, next) {
  //запись новой картинки
  res.redirect('/');
});

module.exports = router;
