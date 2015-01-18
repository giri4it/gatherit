define(["backbone","marionette", "listing/view", "listing/listingView","listing/collection", "listing/model"],
		function(Backbone, Marionette,  ListingView, CollectionView, CollectionModel, ItemModel){
	var collection = new CollectionModel();
	collection.fetch();
//	collection.each(function(model){
//		  alert("Mode"+model.get("add_id"));
//		  alert("FileType"+model.get("file_type")); 
//		});
	var listingView = new CollectionView({
		collection:collection
	}),
	 _options = {};
	
    var ListingController = Backbone.Marionette.Controller.extend({
    	showListing: function (_options){    		
        	_options.region.show(listingView);
        }
    });
    
    
    return ListingController;
});