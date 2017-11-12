var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var fotoFront = require('./routes/foto-front');
var fotoTop = require('./routes/foto-top');
var pointsFront = require('./routes/points-front');
var pointsTop = require('./routes/points-top');
var scale = require('./routes/scale');
var whole = require('./routes/whole');
var obl1 = require('./routes/obl-1');
var obl2 = require('./routes/obl-2');
var obl3 = require('./routes/obl-3');
var count = require('./routes/count');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/foto-front', fotoFront);
app.use('/foto-top', fotoTop);
app.use('/points-front', pointsFront);
app.use('/points-top', pointsTop);
app.use('/scale', scale);
app.use('/whole', whole);
app.use('/obl-1', obl1);
app.use('/obl-2', obl2);
app.use('/obl-3', obl3);
app.use('/count', count);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
