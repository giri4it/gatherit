define(["backbone","marionette","home/login/view","home/view"],
		function(Backbone, Marionette, LoginView, HomeView){
	
	var loginView = new LoginView(),
	 homeView = new HomeView(),
	 _options = {};
	
    var HomeController = Backbone.Marionette.Controller.extend({
    	showLogin:function(options){
    		_options = options;
        	options.region.show(loginView);
        	var globalChannel = Backbone.Wreqr.radio.channel('global');
        	globalChannel.vent.on("show:home",showHome);
        }
    });
    loginView.on("click:login","doLogin");
    
    function doLogin(){
    	console.log("In Home Controller doLogin");
    }

    function showHome(){
    	_options.region.show(homeView);
    }
    
    return HomeController;
});