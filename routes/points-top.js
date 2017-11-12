var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = [];
  var p = [];
      p.push({x: '200', y: '250'});
      p.push({x: '300', y: '250'});
      p.push({x: '800', y: '250'});

  if (fs.existsSync('data/pointsTop.json')){
    console.log('data/pointsTop.json exists');
    data = fs.readFileSync('data/pointsTop.json', 'utf8');

    if ( data == '' ){
      console.log('data/pointsTop.json empty');
    }
    else{
      console.log('data/pointsTop.json doesnt empty');
      data = fs.readFileSync('data/pointsTop.json', 'utf8');
      data = JSON.parse(data);
      p[0].x = data[0].x;
      p[0].y  = data[0].y;
      p[1].x  = data[1].x;
      p[1].y  = data[1].y;
      p[2].x  = data[2].x;
      p[2].y  = data[2].y;
    }
}
console.log(p);
  res.render('points-top', { title: 'Ввод точек вида сверху',
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
  fs.writeFileSync('data/pointsTop.json', json, 'utf8');

  res.redirect('/scale');
});

module.exports = router;
