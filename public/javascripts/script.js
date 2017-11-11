$(function() {
//console.log(document.getElementById('canvas'));
  var Np = 0;

  function points_front(){
    console.log('s');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1000, 500);
    //ctx.fillStyle = "green";
    //ctx.fillRect(10, 10, 100, 100);
    var pic = new Image();
        if ( $('canvas.front').length ) {
          pic.src = '/images/foto-front';
        }
        if ( $('canvas.top').length ) {
          pic.src = '/images/foto-top';
        }
        if ( $('canvas.scale').length ) {
          pic.src = '/images/foto-front';
        }
        if ( $('canvas[class^="obl"]').length ) {
          pic.src = '/images/foto-top';
        }
        pic.onload = function() {
          ctx.drawImage(pic, 0, 0);
                if ( $('canvas.front').length ) {
                    ///front point
                    ctx.strokeStyle="#FF0000";
                    ctx.lineWidth=5;
                    ctx.beginPath();
                    ctx.moveTo( $('.x1').val(), $('.y1').val());
                    ctx.lineTo( $('.x1').val(), $('.y2').val());
                    ctx.lineTo( $('.x2').val(), $('.y2').val());
                    ctx.lineTo( $('.x2').val(), $('.y1').val());
                    ctx.lineTo( $('.x1').val(), $('.y1').val());
                    ctx.stroke();

                    $('#p1').css('top', ($('.y1').val()-10)+'px').css('left', ($('.x1').val()-10)+'px');
                    $('#p2').css('top', ($('.y2').val()-10)+'px').css('left', ($('.x2').val()-10)+'px');
                    ///////end front point
                  }
              if ( $('canvas.top').length ) {
                  ///top point
                  ctx.strokeStyle="#FF0000";
                  ctx.lineWidth=5;
                  ctx.beginPath();
                  //ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
                  var xcenter = ($('.x3').val()-$('.x1').val())/2 -(- $('.x1').val());
                  console.log(xcenter);
                  ctx.arc(xcenter, $('.y1').val(), xcenter-$('.x2').val(), 0, 2 * Math.PI);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.arc(xcenter, $('.y1').val(), ($('.x3').val()-$('.x1').val())/2, 0, 2 * Math.PI);
                  ctx.stroke();

                  $('#p1').css('top', ($('.y1').val()-10)+'px').css('left', ($('.x1').val()-10)+'px');
                  $('#p2').css('top', ($('.y2').val()-10)+'px').css('left', ($('.x2').val()-10)+'px');
                  $('#p3').css('top', ($('.y3').val()-10)+'px').css('left', ($('.x3').val()-10)+'px');
                  ///////end top point
              }
              if ( $('canvas.scale').length ) {
                  ///scale point
                  ctx.strokeStyle="#FF0000";
                  ctx.lineWidth=5;
                  ctx.beginPath();
                  ctx.moveTo( $('.x1').val(), $('.y1').val());
                  ctx.lineTo( $('.x2').val(), $('.y2').val());
                  ctx.stroke();

                  $('#p1').css('top', ($('.y1').val()-10)+'px').css('left', ($('.x1').val()-10)+'px');
                  $('#p2').css('top', ($('.y2').val()-10)+'px').css('left', ($('.x2').val()-10)+'px');
                  ///////end scale point
                }

                if ( $('canvas[class^="obl"]').length ) {
                    ///scale point
                    ctx.strokeStyle="#FF0000";
                    ctx.lineWidth=5;
                    ctx.beginPath();
                    ctx.moveTo( $('.x1').val(), $('.y1').val());
                    ctx.lineTo( $('.x2').val(), $('.y2').val());
                    ctx.lineTo( $('.x3').val(), $('.y3').val());
                    ctx.lineTo( $('.x4').val(), $('.y4').val());
                    ctx.lineTo( $('.x5').val(), $('.y5').val());
                    ctx.lineTo( $('.x1').val(), $('.y1').val());
                    ctx.stroke();

                    $('#p1').css('top', ($('.y1').val()-10)+'px').css('left', ($('.x1').val()-10)+'px');
                    $('#p2').css('top', ($('.y2').val()-10)+'px').css('left', ($('.x2').val()-10)+'px');
                    $('#p3').css('top', ($('.y3').val()-10)+'px').css('left', ($('.x3').val()-10)+'px');
                    $('#p4').css('top', ($('.y4').val()-10)+'px').css('left', ($('.x4').val()-10)+'px');
                    $('#p5').css('top', ($('.y5').val()-10)+'px').css('left', ($('.x5').val()-10)+'px');
                    ///////end scale point
                  }

        }

  }

    if ($('canvas').length) {points_front();}

    $('#p1').click(function(){
      Np = 1;
    });
    $('#p2').click(function(){
      Np = 2;
    });
    $('#p3').click(function(){
      Np = 3;
    });
    $('#p4').click(function(){
      Np = 4;
    });
    $('#p5').click(function(){
      Np = 5;
    });
    $('#front').click(function(){

    });

    if ($('canvas').length)
    document.getElementById('canvas').onclick = function(e,) {
      var x = e.offsetX==undefined?e.layerX:e.offsetX;
      var y = e.offsetY==undefined?e.layerY:e.offsetY;
      console.log(x +'x'+ y);
      console.log(Np);
      if (Np==1){
        document.getElementById('x1').value = x;
        document.getElementById('y1').value = y;
        points_front();
      }
      else if (Np==2){
        document.getElementById('x2').value = x;
        document.getElementById('y2').value = y;
        points_front();
      }
      else if (Np==3){
        document.getElementById('x3').value = x;
        document.getElementById('y3').value = y;
        points_front();
      }
      else if (Np==4){
        document.getElementById('x4').value = x;
        document.getElementById('y4').value = y;
        points_front();
      }
      else if (Np==5){
        document.getElementById('x5').value = x;
        document.getElementById('y5').value = y;
        points_front();
      }
    }

});
