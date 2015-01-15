module.exports = 
	function(){
	
		var pg = require('pg');
		var _ = require('underscore');
	
		this.storeFile = function(request, response){
			//console.log("request =" + request.body);
			//var file = request.param('file');
			//var file_type = request.param('file_type');
			////console.log("request received key - "+ key +"| num - "+ mobile_num );
			//
			//
			//pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			//    client.query('INSERT INTO advertisement_data(file, file_type) VALUES ($1,$2)',[file_data,file_type], function(err, result) {
			//      done();
			//      if (err)
			//       {
			//    	  console.error(err); response.send("Error " + err);
			//    	  response.json("{Registration: FAILURE}");
			//       }
			//      else
			//       {
			//    	  response.json("{Registration: SUCCESS}");
			//       }
			//    });
			//  });
			}
	};

