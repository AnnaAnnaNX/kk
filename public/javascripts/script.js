$(function() {

  var Np = 0;

  function points_front(){
    console.log('s');
    var canvas = document.getElementById("front");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
    var pic = new Image();
        pic.src    = '/images/foto-front';
        pic.onload = function() {
          ctx.drawImage(pic, 0, 0);

          ctx.strokeStyle="#FF0000";
          ctx.lineWidth=5;
          ctx.beginPath();
          ctx.moveTo( $('.x1').val(), $('.y1').val());
          ctx.lineTo( $('.x2').val(), $('.y2').val());
          ctx.lineTo( $('.x3').val(), $('.y3').val());
          ctx.lineTo( $('.x3').val(), $('.y1').val());
          ctx.lineTo( $('.x1').val(), $('.y1').val());
          ctx.stroke();

          $('#p1').css('top', ($('.y1').val()-10)+'px').css('left', ($('.x1').val()-10)+'px');
          $('#p2').css('top', ($('.y2').val()-10)+'px').css('left', ($('.x2').val()-10)+'px');
          $('#p3').css('top', ($('.y3').val()-10)+'px').css('left', ($('.x3').val()-10)+'px');

        }

  }

  if ( $('canvas.front') ) {points_front();}


    $('#p1').click(function(){
      Np = 1;
    });
    $('#p2').click(function(){
      Np = 2;
    });
    $('#p3').click(function(){
      Np = 3;
    });
    $('#p5').click(function(){
      Np = 4;
    });
    $('#p4').click(function(){
      Np = 5;
    });
    $('#front').click(function(){

    });

    document.getElementById('front').onclick = function(e) {
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
