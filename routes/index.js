var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  //clear data
  if (fs.existsSync('./public/images/foto-front')){
    fs.unlinkSync('./public/images/foto-front');
  }
  if (fs.existsSync('./public/images/foto-top')){
    fs.unlinkSync('./public/images/foto-top');
  }
  if (fs.existsSync('data/pointsFront.json')){
    fs.unlinkSync('data/pointsFront.json');
  }
  if (fs.existsSync('data/pointsTop.json')){
    fs.unlinkSync('data/pointsTop.json');
  }
  if (fs.existsSync('data/scale.json')){
    fs.unlinkSync('data/scale.json');
  }
  if (fs.existsSync('data/whole.json')){
    fs.unlinkSync('data/whole.json');
  }
  if (fs.existsSync('data/obl1.json')){
    fs.unlinkSync('data/obl1.json');
  }
  if (fs.existsSync('data/obl2.json')){
    fs.unlinkSync('data/obl2.json');
  }
  if (fs.existsSync('data/obl3.json')){
    fs.unlinkSync('data/obl3.json');
  }


  res.render('index', { title: 'Подсчет калорий' });
});

module.exports = router;
