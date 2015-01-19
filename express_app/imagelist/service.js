module.exports = 
	function(){
	
		var pg = require('pg');
		var _ = require('underscore');
	
		this.fetchImages = function(request, response){

			pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			    client.query('SELECT user_fk, ad_id, file_description, file_type FROM advertisement_data',[], function(err, result) {
			      done();
			      if (err)
			       { console.error(err); response.send("Error " + err); }
			      else
			       { 
			    	  if(_.size(result.rows) > 0)
			    	  {
//			    		  _.each(result.rows, function(row) {
//								console.log("key =" + row.add_id);
//							});
			    		  response.json(result.rows);
			    	  } 
			    	  else
			    	  {
			    		  response.status(401);
			    	  	  response.json("{Authentication :FAILED}");
			    	  }
			       }
			    });
			  });
			}
	};

