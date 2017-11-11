var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './public/images/' });

/* GET users listing. */
router.get('/', function(req, res, next) {
  var haveFoto = false;
  if (fs.existsSync('./public/images/foto-front')){
    haveFoto = true;
  }
  res.render('foto-front', { title: 'Вид блюда сбоку', haveFoto: haveFoto });
});

router.post('/', upload.any(), function(req, res, next) {

  if (fs.existsSync('./public/images/foto-front')){
    fs.unlinkSync('./public/images/foto-front');
    console.log('successfully deleted /public/images/foto-front');
  }

  var data = {};
    fs.rename('./public/images/'+req.files[0].filename, './public/images/foto-front', function (err) {
    if (err) throw err;
    console.log('renamed complete');
  });

  res.redirect('/foto-top');
});

module.exports = router;
