module.exports = 
	function(){
	
		var pg = require('pg'),
		_ = require('underscore'),
			formidable = require('formidable'),
			util = require('util'),
			fs = require('fs');

		this.storeFile = function(request, response){

			var form = new formidable.IncomingForm();

			form.on('end',function(err, fields, files){
				if (err) {
					next(err);
				} else {
					console.log("end - Uploaded.");
				}
			});

			form.parse(request, function(err, fields, files) {
				//response.writeHead(200, {'content-type': 'text/plain'});
				//response.write('received upload:\n\n');
				console.log(util.inspect({fields: fields, files: files}));
				console.log('parse - uploaded: '+ '\r');
				var loc_on_disk = files.file.path;
				fs.readFile(loc_on_disk, 'hex', function(err, imgData) {
					//console.log('imgData',imgData);
					imgData = '\\x' + imgData;

					//move to dao later
					pg.connect(process.env.DATABASE_URL, function(err, client, done) {
						client.query('INSERT INTO advertisement_data(add_id, user_fk, file, file_type) VALUES ($1, $2, $3, $4)',[1,1,imgData,'image'], function(err, result) {
							done();
							if (err)
							{
								console.error(err); response.send("Error " + err);
								console.log('err',err,'pg writeResult', result);
								response.json("{upload: FAILURE}");
							}
							else
							{
								response.json("{upload: SUCCESS}");
							}
						});
					});

				});
			});


			form.on('progress', function(bytesReceived, bytesExpected){
				var percent = (bytesReceived / bytesExpected * 100) | 0;
				console.log('progress - Uploading: %' + percent + '\r');
				//process.stdout.write('Uploading: %' + percent + '\r');
			});


			}
	};

