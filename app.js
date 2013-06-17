var express = require('express');
var app = express(), port;

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.sendfile( 'index.html' );
});

port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

