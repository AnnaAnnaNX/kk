var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = [];
  var p = [];
      p.push({x: '400', y: '250'});
      p.push({x: '600', y: '250'});

  if (fs.existsSync('data/scale.json')){
    console.log('data/scale.json exists');
    data = fs.readFileSync('data/scale.json', 'utf8');

    if ( data == '' ){
      console.log('data/scale.json empty');
    }
    else{
      console.log('data/scale.json doesnt empty');
      data = fs.readFileSync('data/scale.json', 'utf8');
      data = JSON.parse(data);
      p[0].x = data[0].x;
      p[0].y  = data[0].y;
      p[1].x  = data[1].x;
      p[1].y  = data[1].y;
    }
}
  res.render('scale', { title: 'Ввод точек масштабного объекта',
                                x1: p[0].x,
                                y1: p[0].y,
                                x2: p[1].x,
                                y2: p[1].y
                              });
});

router.post('/', function(req, res, next) {
  var data = [];

  data.push({x: req.body.x1, y: req.body.y1});
  data.push({x: req.body.x2, y: req.body.y2});
  json = JSON.stringify(data); //convert it back to json
  fs.writeFileSync('data/scale.json', json, 'utf8');

  res.redirect('/whole');
});

module.exports = router;
