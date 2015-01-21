define(["backbone","marionette", "adlist/compositeView","adlist/collection"],
		function(Backbone, Marionette, CollectionView, CollectionModel){

	var collection = new CollectionModel();

	var _options = {};
	
    var ListingController = Backbone.Marionette.Controller.extend({
    	showListing: function (_options){
    		collection.fetch();
        	_options.region.show(new CollectionView({
				collection : collection
			}));
        }
    });
    
    
    return ListingController;
});