define(["backbone","marionette","handlebars","text!adlist/itemTemplate.hb","backbone.stickit","adlist/itemModel"],
		function(Backbone, Marionette, Handlebars, ItemTemplate, Stickit, ListingModel){
	
    var ItemView = Backbone.Marionette.ItemView.extend({
    	id:'image-list-row',
    	tagName: 'div',
    	template: Handlebars.compile(ItemTemplate),
        initialize: function(){

        },
        events:{
        	'click #btnPushImage': 'pushImage'
        },
        pushImage: function(){        	
        	this.model.save({},{
        		success:function(){
        			console.log("success");
        			//var globalChannel = Backbone.Wreqr.radio.channel('global');
        			//globalChannel.vent.trigger("show:home");
					alert('ad pushed');
        		},
        		error:function(){
        			console.log("error");
					alert('ad push failed');

        		}
        	});
        }
    });
    return ItemView;
});