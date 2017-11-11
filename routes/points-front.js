var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = [];
  var p = [];
      p.push({x: '', y: ''});
      p.push({x: '', y: ''});
      p.push({x: '', y: ''});

  if (fs.existsSync('data/pointsFront.json')){
    console.log('data/pointsFront.json exists');
    data = fs.readFileSync('data/pointsFront.json', 'utf8');

    if ( data == '' ){
      console.log('data/pointsFront.json empty');
    }
    else{
      console.log('data/pointsFront.json doesnt empty');
      data = fs.readFileSync('data/pointsFront.json', 'utf8');
      console.log(data);
      data = JSON.parse(data);
      console.log(data);
      console.log(data[0]);
      console.log(data[0].x);
      console.log(p);
      console.log(p[0]);
      console.log(p[0].x);
      p[0].x = data[0].x;
      p[0].y  = data[0].y;
      p[1].x  = data[1].x;
      p[1].y  = data[1].y;
      p[2].x  = data[2].x;
      p[2].y  = data[2].y;
    }
} console.log(p[2].x);
  res.render('points-front', { title: 'Ввод точек фронтального вида',
                                x1: p[0].x,
                                y1: p[0].y,
                                x2: p[1].x,
                                y2: p[1].y,
                                x3: p[2].x,
                                y3: p[2].y
                              });
});

router.post('/', function(req, res, next) {
  var data = [];

  data.push({x: req.body.x1, y: req.body.y1});
  data.push({x: req.body.x2, y: req.body.y2});
  data.push({x: req.body.x3, y: req.body.y3});
  json = JSON.stringify(data); //convert it back to json
  fs.writeFileSync('data/pointsFront.json', json, 'utf8');

  res.redirect('/');
});

module.exports = router;
