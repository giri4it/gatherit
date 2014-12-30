var express = require('express');

var bodyParser = require('body-parser')
var app = express();

var LoginService = require('./express_app/login/service.js');
var loginService = new LoginService();

console.log(LoginService);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/login', function(request, response) {
	
	loginService.authenticate(request,response);
	  
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
