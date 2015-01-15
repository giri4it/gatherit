module.exports = function() {

	var pg = require('pg');
	var _ = require('underscore');
	var gcm = require('node-gcm-service');
	this.push = function(request, response) {
		console.log("request =" + request.body);

		// console.log("request =" + request.body);
		var imageId = request.param('imageId');
		var userId = request.param('userId');
		// console.log("request received loginName - "+ loginName +"| password -
		// "+ password );
		var conString = "postgres://postgres:admin@localhost/postgres";
		pg.connect(conString, function(err, client, done) {
			client.query('SELECT * FROM device_register_map ', [], function(
					err, result) {
				done();
				if (err) {
					console.error(err);
					response.send("Error " + err);
				} else {
					if (_.size(result.rows) > 0) {
						var keys = [];

						_.each(result.rows, function(row) {
							console.log("key =" + row.key);
							console.log("mob number =" + row.mobile_num);
							keys.push(row.key);
						});

						var message = new gcm.Message({
							collapse_key : imageId,
							data : {
								url : imageId
							},
							delay_while_idle : true,

							time_to_live : 34,
							dry_run : false
						});

						console.log("message =" + message);
						var sender = new gcm.Sender({
							key : 'AIzaSyDTAIUS59Je88zDAy-y2Aj-YnjsbaIgR2Y'
						});
						console.log("sender =" + sender);
						sender.sendMessage(message.toString(), keys, false,
								function(err, data) {
									if (!err) {
										console.log("success =" + data);
									} else {
										console.log("error =" + err);
									}
								});
						response.json("{Authentication: SUCCESS}");
					} else {
						response.status(401);
						response.json("{Authentication :FAILED}");
					}
				}
			});
		});

	}
};
