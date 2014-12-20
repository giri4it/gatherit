define(["backbone","marionette","home/view"],
		function(Backbone, Marionette, HomeView){
    var HomeController = Backbone.Marionette.Controller.extend({
    	showHome:function(options){
        	options.region.show(new HomeView());
        }
    });
    return HomeController;
});