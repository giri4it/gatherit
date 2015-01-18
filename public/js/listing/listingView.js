define(["backbone","marionette","handlebars","text!listing/listingTemplate.hb","backbone.stickit","listing/model", "listing/view"],
		function(Backbone, Marionette, Handlebars, Template, Stickit, ListingModel, ItemView){
    var CollectionView = Backbone.Marionette.CompositeView.extend({
    	initialize: function(){
        	this.template = Handlebars.compile(Template);
        },
    	childView: ItemView
    });

    return CollectionView;
});