module.exports = 
	function(){
	
		var pg = require('pg');
		var _ = require('underscore');
	
		this.getAdList = function(request, response){

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

		this.getImage = function(request, response){

			var adId = request.param('ad_id'),
				userId = request.param('user_id');


			pg.connect(process.env.DATABASE_URL, function(err, client, done) {
				client.query('SELECT file FROM advertisement_data WHERE ad_id = $1 AND user_fk = $2 limit 1',[adId, userId],
					function (err, readResult) {
						done();
						if(err){
							console.error(err); response.send("Error " + err);
							console.log('err', err, 'pg readResult', readResult);
						} else {
							console.log(readResult);
							//response.writeHead(200, {'Content-Type': 'image/jpg' });
							response.write(readResult.rows[0].file);
							response.end();
						}
					});
			});
		}

		this.getThumbImage = function(request, response){

			var gm = require('gm')
				, imageMagick = gm.subClass({ imageMagick: true });

			//var im = require('imagemagick');
			var fs = require('fs');

			var adId = request.param('ad_id'),
				userId = request.param('user_id');

			var imageSourcePath = './public/tempfile/'+ request.param('ad_id');
			var imageThumbPath = './public/thumbfile/'+request.param('ad_id');

			pg.connect(process.env.DATABASE_URL, function(err, client, done) {
				client.query('SELECT file FROM advertisement_data WHERE ad_id = $1 AND user_fk = $2 limit 1',[adId, userId],
					function (err, readResult) {
						done();
						if(err){
							console.error(err); response.send("Error " + err);
							console.log('err', err, 'pg readResult', readResult);
						} else {
							console.log(readResult);
							fs.writeFile(imageSourcePath, readResult.rows[0].file, function (err) {
								if(err){
									console.error(err);
									response.end("Error " + err);
								}
								imageMagick(imageSourcePath).resize(100,50).write(imageThumbPath,
								 function (err) {

									if (err) {
										response.end("Error:"+ err);
									}
								 	console.log('resized image to fit within 300x200px');

								});
							});



							fs.readFile(imageThumbPath, function (err, data) {
								if(err) {
									response.end("Error:"+ err);
								}

								if(data) {
									response.write(data);
								} else {
									response.write('image is not available');
								}
								response.end();
							});

						}
					});
			});



		}
	};

