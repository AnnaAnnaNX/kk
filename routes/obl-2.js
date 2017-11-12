var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = [];
  var p = [];
      p.push({x: '100', y: '400'});
      p.push({x: '100', y: '100'});
      p.push({x: '900', y: '100'});
      p.push({x: '900', y: '400'});
      p.push({x: '450', y: '450'});
      p.push({food: 'картошка'});

  if (fs.existsSync('data/obl2.json')){
    console.log('data/obl2.json exists');
    data = fs.readFileSync('data/obl2.json', 'utf8');

    if ( data == '' ){
      console.log('data/obl2.json empty');
    }
    else{
      console.log('data/obl2.json doesnt empty');
      data = fs.readFileSync('data/obl2.json', 'utf8');
      data = JSON.parse(data);
      p[0].x = data[0].x;
      p[0].y  = data[0].y;
      p[1].x  = data[1].x;
      p[1].y  = data[1].y;
      p[2].x  = data[2].x;
      p[2].y  = data[2].y;
      p[3].x  = data[3].x;
      p[3].y  = data[3].y;
      p[4].x  = data[4].x;
      p[4].y  = data[4].y;
    }
}
  res.render('obl-2', { title: 'Ввод точек области 2',
                                x1: p[0].x,
                                y1: p[0].y,
                                x2: p[1].x,
                                y2: p[1].y,
                                x3: p[2].x,
                                y3: p[2].y,
                                x4: p[3].x,
                                y4: p[3].y,
                                x5: p[4].x,
                                y5: p[4].y
                              });
});

router.post('/', function(req, res, next) {
  var data = [];

  data.push({x: req.body.x1, y: req.body.y1});
  data.push({x: req.body.x2, y: req.body.y2});
  data.push({x: req.body.x3, y: req.body.y3});
  data.push({x: req.body.x4, y: req.body.y4});
  data.push({x: req.body.x5, y: req.body.y5});
  data.push({food: req.body.food});
  json = JSON.stringify(data); //convert it back to json
  fs.writeFileSync('data/obl2.json', json, 'utf8');

  res.redirect('/obl-3');
});

module.exports = router;
