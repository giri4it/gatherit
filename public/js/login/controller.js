define(["backbone","marionette","login/view", "home/controller"],
		function(Backbone, Marionette, LoginView, HomeController){
	
	var loginView = new LoginView(),
	 _options = {};
	var homeController = new HomeController();
	
    var LoginController = Backbone.Marionette.Controller.extend({
    	showLogin:function(options){
    		_options = options;
        	options.region.show(loginView);
        	var globalChannel = Backbone.Wreqr.radio.channel('global');
        	globalChannel.vent.on("show:home",showHome);
        }
    });

    function showHome(){
    	homeController.showHome(_options);
    }
    
    return LoginController;
});