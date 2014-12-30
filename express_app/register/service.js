module.exports = 
	function(){
	
		var pg = require('pg');
		var _ = require('underscore');
	
		this.register = function(request, response){
			//console.log("request =" + request.body);
			var key = request.param('key');
			var mobile_num = request.param('mobile_num');
			//console.log("request received key - "+ key +"| num - "+ mobile_num );
			
			
			pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			    client.query('INSERT INTO device_register_map(key,mobile_num) VALUES ($1,$2)',[key,mobile_num], function(err, result) {
			      done();
			      if (err)
			       { 
			    	  console.error(err); response.send("Error " + err);
			    	  response.json("{Registration: FAILURE}"); 
			       }
			      else
			       { 
			    	  response.json("{Registration: SUCCESS}"); 
			       }
			    });
			  });
			}
	};

