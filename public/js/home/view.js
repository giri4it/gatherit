define(["jquery", "backbone","marionette","handlebars","text!home/template.hb"],
		function($, Backbone, Marionette, Handlebars, Template){
	
    var HomeView = Backbone.Marionette.ItemView.extend({
    	id:'container',
    	tagName:'div',
        initialize: function(){
        	this.template = Handlebars.compile(Template);
        },
        onRender: function(){
        	this.$('dropdown-toggle').dropdown();
        	return this;
        },
        events:{
        	'click #btnLogin': 'login',
        },
        onBeforeDestroy: function () {
            
        }
    });
    return HomeView;
});