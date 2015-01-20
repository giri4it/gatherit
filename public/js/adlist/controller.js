define(["backbone","marionette", "adlist/compositeView","adlist/collection"],
		function(Backbone, Marionette, CollectionView, CollectionModel){

	var collection = new CollectionModel();

	var collectionView = new CollectionView({
		collection : collection
	}),
	 _options = {};
	
    var ListingController = Backbone.Marionette.Controller.extend({
    	showListing: function (_options){
    		collection.fetch();
        	_options.region.show(collectionView);
        }
    });
    
    
    return ListingController;
});