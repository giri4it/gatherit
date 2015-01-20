var express = require('express');

var fs = require("fs");

var bodyParser = require('body-parser')
var app = express();

var LoginService = require('./express_app/login/service.js');
var loginService = new LoginService();

var RegisterService = require('./express_app/register/service.js');
var registerService = new RegisterService();

var UploadService = require('./express_app/upload/service.js');
var uploadService = new UploadService();

var AdlistService = require('./express_app/adlist/service.js');
var adlistService = new AdlistService();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.send('Hello World!');
});


app.get('/getadlist', function(request, response) {

	adlistService.getAdList(request,response);
	  
});

app.get('/getimage', function(request, response) {

	adlistService.getImage(request,response);
	  
});

app.get('/getthumbimage', function(request, response) {

	adlistService.getThumbImage(request,response);

});



app.post('/login', function(request, response) {
	
	loginService.authenticate(request,response);
	  
});

app.post('/register',function(request, response){
	console.log("in register method");
	//TODO: instead of passing req, res pass the model object after validation
	registerService.register(request,response);
	
});


app.post('/upload',function(request, response){

	console.log("upload received");
	uploadService.storeFile(request, response);
	if (request.files) {
		if (request.files.myFile.size === 0) {
			return next(new Error("Hey, first would you select a file?"));
		}


		//fs.exists(request.files.myFile.path, function(exists) {
		//	if(exists) {
		//		response.end("Got your file!");
		//		uploadService.storeFile(request, response);
		//	} else {
		//		response.end("Well, there is no magic for those who don’t believe in it!");
		//	}
		//});

	}
});


var PushMessage = require('./express_app/pushMessage/service.js');
var pushMessage = new PushMessage();
app.post('/pushMessage', function(request, response) {
	console.log("in pushMessage method");
	// TODO: instead of passing req, res pass the model object after validation
	pushMessage.push(request, response);

});

app.get('/getad', function(request, response) {
	
	//response.writeHead(200, {'Content-Type': 'text/html' });
	response.send('<html><body><h4 style="color: #ce8483">Exclusive offers!</h4></h4><img src="/getimage?ad_id=1&user_id=1"></body></html>');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
