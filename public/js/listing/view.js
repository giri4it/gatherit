define(["backbone","marionette","handlebars","text!listing/template.hb","backbone.stickit","listing/model"],
		function(Backbone, Marionette, Handlebars, Template, Stickit, ListingModel){
	
    var ItemView = Backbone.Marionette.ItemView.extend({
    	id:'container',
    	tagName: 'div',
    	template: _.template(Template),
    	model: ListingModel,
        initialize: function(){
        	//this.template = Handlebars.compile(Template);
        	//When template is created this way, the model is not becoming available in the template
        },
        events:{
        	'click #btnPushImage': 'pushImage'
        },
        pushImage: function(){        	
        	this.model.save({},{
        		success:function(){
        			console.log("success");
        			var globalChannel = Backbone.Wreqr.radio.channel('global');
        			globalChannel.vent.trigger("show:home");
        		},
        		error:function(){
        			console.log("erorr");
        		}
        	});
        }
    });
    return ItemView;
});