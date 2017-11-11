var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './public/images/' });

/* GET users listing. */
router.get('/', function(req, res, next) {
  var haveFoto = false;
  if (fs.existsSync('./public/images/foto-top')){
    haveFoto = true;
  }
  res.render('foto-top', { title: 'Вид блюда сверху', haveFoto: haveFoto });
});

router.post('/', upload.any(), function(req, res, next) {

  if (fs.existsSync('./public/images/foto-top')){
    fs.unlinkSync('./public/images/foto-top');
    console.log('successfully deleted /public/images/foto-top');
  }

  var data = {};
    fs.rename('./public/images/'+req.files[0].filename, './public/images/foto-top', function (err) {
    if (err) throw err;
    console.log('renamed complete');
  });

  res.redirect('/points-front');
});

module.exports = router;
