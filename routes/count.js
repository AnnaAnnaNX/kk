var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {

//optional function
//leight
function d(x1,y1,x2,y2){
  return Math.pow(Math.pow(x1-x2,2)+Math.pow(y1-y2,2),.5);
}
//S
function S(x1,y1,x2,y2,x3,y3, koef){
  var a,b,c,p;
  a = d(x1,y1,x2,y2)*koef;
  b = d(x2,y2,x3,y3)*koef;
  c = d(x1,y1,x3,y3)*koef;
  p = (a+b+c)/2;
  return Math.pow(p*(p-a)*(p-b)*(p-c),0.5)
}





  //count
  var x1,y1,x2,y2,x1_scale,y1_scale,x2_scale,y2_scale;
  var x1_top,y1_top,x2_top,y2_top,x3_top,y3_top;
  var x1_obl1,y1_obl1,x2_obl1,y2_obl1,x3_obl1,y3_obl1,x4_obl1,y4_obl1,x5_obl1,y5_obl1;
  var l;//leigth
  var h;//hight
  var l_scale;
  var koef;
  var l_real;
  var k_real;
  var d_top;//diameter top foto
  var koef_top;
  var margin_plate;
  var d_top_real;
  var r_top;
  var r;
  var S_whole;
  var V_whole;
  var S1,S2,S3,S_obl1,S_obl2,S_obl3;
  var S_obl_sum;
  var V_obl1,V_obl2,V_obl3;

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
koef_top = l_real/d_top;
d_top_real = d_top * koef_top;
margin_plate = d(x1_top,y1_top,x2_top,y2_top);
r_top = (d_top - margin_plate*2)/2;
r = r_top * koef_top;
console.log(r);
/////whole

//if (fs.existsSync('data/pointsTop.json')){
    S_whole = Math.PI * Math.pow(r,2);
    V_whole = S_whole * h_real;


    S_obl_sum = 0;
    ///obl1
    if (fs.existsSync('data/obl1.json')){
      console.log('data/obl1.json exists');
      data = fs.readFileSync('data/obl1.json', 'utf8');

      if ( data == '' ){
        console.log('data/obl1.json empty');
      }
      else{
        console.log('data/obl1.json doesnt empty');
        data = fs.readFileSync('data/obl1.json', 'utf8');
        data = JSON.parse(data);
        x1_obl1 = data[0].x;
        y1_obl1  = data[0].y;
        x2_obl1  = data[1].x;
        y2_obl1  = data[1].y;
        x3_obl1  = data[2].x;
        y3_obl1  = data[2].y;
        x4_obl1  = data[3].x;
        y4_obl1  = data[3].y;
        x5_obl1  = data[4].x;
        y5_obl1  = data[4].y;
      }
      S_obl1 = 0;
      S1 = S(x1_obl1,y1_obl1,x2_obl1,y2_obl1,x3_obl1,y3_obl1,koef_top);
      S2 = S(x1_obl1,y1_obl1,x3_obl1,y3_obl1,x4_obl1,y4_obl1,koef_top);
      S3 = S(x1_obl1,y1_obl1,x4_obl1,y4_obl1,x5_obl1,y5_obl1,koef_top);
      S_obl1 = S1 + S2 + S3;
      V_obl1 = S_obl1 * h_real;
      S_obl_sum+=S_obl1;
    }

    ///obl2
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
        x1_obl1 = data[0].x;
        y1_obl1  = data[0].y;
        x2_obl1  = data[1].x;
        y2_obl1  = data[1].y;
        x3_obl1  = data[2].x;
        y3_obl1  = data[2].y;
        x4_obl1  = data[3].x;
        y4_obl1  = data[3].y;
        x5_obl1  = data[4].x;
        y5_obl1  = data[4].y;
      }
      S_obl2 = 0;
      S1 = S(x1_obl1,y1_obl1,x2_obl1,y2_obl1,x3_obl1,y3_obl1,koef_top);
      S2 = S(x1_obl1,y1_obl1,x3_obl1,y3_obl1,x4_obl1,y4_obl1,koef_top);
      S3 = S(x1_obl1,y1_obl1,x4_obl1,y4_obl1,x5_obl1,y5_obl1,koef_top);
      S_obl2 = S1 + S2 + S3;
      V_obl2 = S_obl2 * h_real;
      S_obl_sum+=S_obl2;
    }

    ///obl3
    if (fs.existsSync('data/obl3.json')){
      console.log('data/obl3.json exists');
      data = fs.readFileSync('data/obl3.json', 'utf8');

      if ( data == '' ){
        console.log('data/obl3.json empty');
      }
      else{
        console.log('data/obl3.json doesnt empty');
        data = fs.readFileSync('data/obl3.json', 'utf8');
        data = JSON.parse(data);
        x1_obl1 = data[0].x;
        y1_obl1  = data[0].y;
        x2_obl1  = data[1].x;
        y2_obl1  = data[1].y;
        x3_obl1  = data[2].x;
        y3_obl1  = data[2].y;
        x4_obl1  = data[3].x;
        y4_obl1  = data[3].y;
        x5_obl1  = data[4].x;
        y5_obl1  = data[4].y;
      }
      S_obl3 = 0;
      S1 = S(x1_obl1,y1_obl1,x2_obl1,y2_obl1,x3_obl1,y3_obl1,koef_top);
      S2 = S(x1_obl1,y1_obl1,x3_obl1,y3_obl1,x4_obl1,y4_obl1,koef_top);
      S3 = S(x1_obl1,y1_obl1,x4_obl1,y4_obl1,x5_obl1,y5_obl1,koef_top);
      S_obl3 = S1 + S2 + S3;
      V_obl3 = S_obl3 * h_real;
      S_obl_sum+=S_obl3;
    }



















  res.render('count', { title: 'Итог',
                        l: l,
                        h: h,
                        l_scale: l_scale,
                        koef: koef,
                        d_top_real: d_top_real,
                        l_real: l_real,
                        h_real: h_real,
                        d_top: d_top,
                        margin_plate: margin_plate,
                        margin_plate_real: margin_plate*koef_top,
                        koef_top: koef_top,
                        r_top: r_top,
                        r: r,
                        S_whole: S_whole,
                        V_whole: V_whole,
                        S_obl1: S_obl1,
                        S_obl2: S_obl2,
                        S_obl3: S_obl3,
                        V_obl1: V_obl1,
                        V_obl2: V_obl2,
                        V_obl3: V_obl3,
                        V_obl_sum: V_obl1+V_obl2+V_obl3,
                        S_obl_sum: S_obl_sum
                            });
});

module.exports = router;
