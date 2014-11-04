var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world\n');
  console.log(new Date() + ' - Request from: ' + req.ip);
});

var server = app.listen(process.env.PORT || 3000, function () {
	console.log('Express server listening on port ' + server.address().port);
});