define(["backbone","marionette","login/controller","home/controller"],
		
  function(Backbone, Marionette, LoginController, HomeController){
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

	  var globalChannel = Backbone.Wreqr.radio.channel('global');

	  globalChannel.vent.on("init:home",function(){

		  require(["backbone","marionette","login/controller","home/controller"],
			  function(Backbone, Marionette, LoginController, HomeController){
			  var homeController = new HomeController();
			  homeController.showHome({region:myApp.mainRegion});
		  });

	  });
  }
);