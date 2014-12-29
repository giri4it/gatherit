define(["backbone","marionette","home/controller"],
		
  function(Backbone, Marionette, HomeController){
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
		var homeController = new HomeController();
		homeController.showLogin({region:myApp.mainRegion});
  }
);