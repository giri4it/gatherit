define(["backbone","marionette","home/login/view"],
		function(Backbone, Marionette, LoginView){
	
	var loginView = new LoginView();
	
    var HomeController = Backbone.Marionette.Controller.extend({
    	showHome:function(options){
        	options.region.show(loginView);
        }
    });
    loginView.on("click:login","doLogin");
    
    function doLogin(){
    	console.log("In Home Controller doLogin");
    }
    
    return HomeController;
});