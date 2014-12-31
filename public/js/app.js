define(["backbone","marionette","login/controller"],
		
  function(Backbone, Marionette, LoginController){
	var MyApp = Marionette.Application.extend({
		  initialize: function(options) {
		    //console.log(options.container);
		  }
		});

		var myApp = new MyApp({ channelName: 'appChannel' });
		myApp.addRegions({
			mainRegion:"#container"
		});
		myApp.start();
		var loginController = new LoginController();
		loginController.showLogin({region:myApp.mainRegion});
  }
);