var app = require('express')();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var events = require('./routes/events');
var users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('*', (req, res, next) => {
  console.log('## ' + req.method + ' ' + req.url);
  next();
});

app.use('/api/v1/users', users);
app.use('/api/v1/events', events);

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('message', function(msg) {
    console.log('message: ' + msg);
  });
});

module.exports = app;
