define(["backbone","marionette", "listing/view", "listing/listingView","listing/collection", "listing/model"],
		function(Backbone, Marionette,  ListingView, CollectionView, CollectionModel, ItemModel){
	var collection = new CollectionModel();
	var listingView = new CollectionView({
		collection:collection
	}),
	 _options = {};
	
    var ListingController = Backbone.Marionette.Controller.extend({
    	showListing: function (_options){
    		collection.fetch();
        	_options.region.show(listingView);
        }
    });
    
    
    return ListingController;
});