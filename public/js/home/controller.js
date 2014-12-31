define(["backbone","marionette", "home/view"],
		function(Backbone, Marionette,  HomeView){
	
	var homeView = new HomeView(),
	 _options = {};
	
    var HomeController = Backbone.Marionette.Controller.extend({
    	showHome: function (_options){
        	_options.region.show(homeView);
        }
    });
    
    return HomeController;
});