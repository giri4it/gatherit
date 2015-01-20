define(["backbone", "adlist/itemModel"],
		function(Backbone, ItemModel){	
    var ListingCollection = Backbone.Collection.extend({
    	url: '/getadlist',
    	model : ItemModel
    });
    return ListingCollection;
});