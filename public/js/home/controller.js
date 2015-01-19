define(["backbone","marionette", "home/view", "imagelist/controller"],
		function(Backbone, Marionette,  HomeView, ListingController ){
	
	var homeView = new HomeView(),
	 _options = {};
	var listingController = new ListingController();

    var HomeController = Backbone.Marionette.Controller.extend({
    	showHome: function (options){
    		_options = options;
    		options.region.show(homeView);
        	
        	var globalChannel = Backbone.Wreqr.radio.channel('global');
        	globalChannel.vent.on("show:listing",showListing);
        }
    });
    
    function showListing(){
    	listingController.showListing(_options);
    }
    
    
    return HomeController;
});