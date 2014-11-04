var express = require('express');
var redis = require('redis');
var app = express();
var client = redis.createClient(
  process.env.REDIS_1_PORT_6379_TCP_PORT || 6379,
  process.env.REDIS_1_PORT_6379_TCP_ADDR || "127.0.0.1"
);

app.get('/', function(req, res, next) {
  client.incr('visits', function(err, visits) {
    if(err) return next(err);
    res.send('Total visits: ' + visits);
  });
});

var server = app.listen(process.env.PORT || 3000, function () {
	console.log('Express server listening on port ' + server.address().port);
});