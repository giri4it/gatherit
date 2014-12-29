define(["backbone","marionette","handlebars","text!home/template.hb"],
		function(Backbone, Marionette, Handlebars, Template){
    var App = Backbone.Marionette.ItemView.extend({
    	id:'container',
    	tagName:'div',
        initialize: function(){
            
        },
        render:function(){
        	var template = Handlebars.compile(Template);
        	this.$el.html(template);
        }
    });
    return App;
});