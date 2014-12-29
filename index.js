var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser')
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/login', function(request, response) {
	
	//console.log("request =" + request.body);
	var loginName = request.param('loginName');
	var password = request.param('password');
	//console.log("request received loginName - "+ loginName +"| password - "+ password );
	
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT * FROM user_login_info WHERE login_name=$1 AND password=$2',[loginName,password], function(err, result) {
	      done();
	      if (err)
	       { console.error(err); response.send("Error " + err); }
	      else
	       { 
	    	  if(_.size(result.rows) > 0)
	    		  response.json("{Authentication: SUCCESS}");
	    	  else
	    		  {
	    		  response.status(401);
	    	  	  response.json("{Authentication :FAILED}");
	    		  }
	       }
	    });
	  });
	  
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
