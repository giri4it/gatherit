module.exports = function() {

	var pg = require('pg');
	var _ = require('underscore');
	var gcm = require('node-gcm-service');

	this.push = function(request, response) {
		console.log("request =" + request.body);

		// console.log("request =" + request.body);
		var imageId = request.param('ad_id');
		var userId = request.param('user_fk');
		console.log("request received ad_id - "+ imageId +"| user id -"+ userId );
		//var conString = "postgres://postgres:admin@localhost/postgres";
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			client.query('SELECT * FROM device_register_map', [], function(
					err, result) {
				done();
				if (err) {
					console.error(err);
					response.send("Error " + err);
					return;
				} else {
					if (_.size(result.rows) > 0) {
						var androidTargets = [];

						_.each(result.rows, function(row) {
							console.log("key =" + row.key);
							console.log("mob number =" + row.mobile_num);
							androidTargets.push(row.key);
						});

						var message = new gcm.Message({
							collapse_key : imageId,
							data : {
								ad_id  : imageId,
								user_id: userId,
								url:'/getad'
							},
							delay_while_idle : true,

							time_to_live : 86400,
							dry_run : false
						});

						console.log("message =" + message.toString());
						var sender = new gcm.Sender({
							//key : 'AIzaSyDTAIUS59Je88zDAy-y2Aj-YnjsbaIgR2Y' -- key by Ashish
							apiKey : 'AIzaSyBLXqh86p9dbf7TMqXnHibYnrP_uF_4XTQ' // key from Sudhi
						});
						console.log("androidTargets =" + androidTargets);
						//sender.setGCMEndpoint('https://android.googleapis.com');
						//sender.setGCMEndPath('/gcm/send');
						var success=false;
						for(var i=0;i<androidTargets.length;i++){
							console.info("device: ",androidTargets[i]);

							sender.sendMessage(message.toString(), androidTargets[i], true, function(err, data) {
					            if (!err) {
					                // do something
					               console.info("data",JSON.stringify(data));
					               success=true;
					            } else {
					                // handle error
					               console.info("error",JSON.stringify(err));
					               success=false;
					            }
					        });

					}
						if(success){
						response.json("{GCM push : SUCCESS}");
						}
						else{
							response.json("{GCM push  :FAILED}");
						}
					} else {
						response.status(401);
						response.json("{Authentication :FAILED}");
					}
				}
			});
		});

	}
};
