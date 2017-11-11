var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {

//optional function
//leight
function d(x1,y1,x2,y2){
  return Math.pow(Math.pow(x1-x2,2)+Math.pow(y1-y2,2),.5);
}
console.log(d(1,0,2,0));//1
console.log(d(0,1,0,2));//1
//S
function S(x1,y1,x2,y2,x3,y3){
  var a,b,c,p;
  a = d(x1,y1,x2,y2);
  b = d(x2,y2,x3,y3);
  c = d(x1,y1,x3,y3);
  p = (a+b+c)/2;
  return Math.pow(p*(p-a)*(p-b)*(p-c),0.5)
}





  //count
  var x1,y1,x2,y2,x1_scale,y1_scale,x2_scale,y2_scale;
  var x1_top,y1_top,x2_top,y2_top,x3_top,y3_top;
  var l;//leigth
  var h;//hight
  var l_scale;
  var koef;
  var l_real;
  var k_real;
  var d_top;//diameter top foto



//#1
  if (fs.existsSync('data/pointsFront.json')){
    console.log('data/pointsFront.json exists');
    data = fs.readFileSync('data/pointsFront.json', 'utf8');

    if ( data == '' ){
      console.log('data/pointsFront.json empty');
    }
    else{
      console.log('data/pointsFront.json doesnt empty');
      data = fs.readFileSync('data/pointsFront.json', 'utf8');
      data = JSON.parse(data);
      x1 = data[0].x;
      y1  = data[0].y;
      x2  = data[1].x;
      y2  = data[1].y;
    }
  }
  else{
    console.log('error #1');
  }

  l = Math.abs(x2-x1);
  h = Math.abs(y1-y2);

  //#2
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
      x1_scale = data[0].x;
      y1_scale  = data[0].y;
      x2_scale  = data[1].x;
      y2_scale  = data[1].y;
    }
}
else{
  console.log('error #2');
}
l_scale = d(x1_scale,y1_scale,x2_scale,y2_scale);
koef = 6/l_scale;

//#3
l_real = l * koef;
h_real = h * koef;

//#4
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
    x1_top = data[0].x;
    y1_top  = data[0].y;
    x2_top  = data[1].x;
    y2_top  = data[1].y;
    x3_top  = data[2].x;
    y3_top  = data[2].y;
  }
}
else{
  console.log('error #4');
}

d_top = d(x1_top,y1_top,x3_top,y3_top);






  res.render('count', { title: 'Итог',
                        l: l,
                        h: h,
                        l_scale: l_scale,
                        koef: koef,
                        l_real: l_real,
                        h_real: h_real,
                        d_top: d_top


                            });
});

module.exports = router;
