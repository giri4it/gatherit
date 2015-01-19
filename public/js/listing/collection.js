define(["backbone", "listing/model"],
		function(Backbone, ItemModel){	
    var ListingCollection = Backbone.Collection.extend({
    	url: '/fetchImages',
    	model : ItemModel
    });
    return ListingCollection;
});