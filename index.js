var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/login', function(request, response) {
	var userName = request.param('userName');
	var password = request.param('password');
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT * FROM user WHERE user_name=?, password=?', function(err, result) {
	      done();
	      if (err)
	       { console.error(err); response.send("Error " + err); }
	      else
	       { 
	    	  if()
	    	  response.send(result.rows); 
	       }
	    });
	  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
