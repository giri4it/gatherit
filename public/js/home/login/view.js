define(["backbone","marionette","handlebars","text!home/login/template.hb","backbone.stickit","home/login/model"],
		function(Backbone, Marionette, Handlebars, Template, Stickit, LoginModel){
	
    var LoginView = Backbone.Marionette.ItemView.extend({
    	id:'container',
    	tagName:'div',
    	model: new LoginModel(),
        initialize: function(){
        	this.template = Handlebars.compile(Template);
        },
        bindings: {
        	'#loginName':'loginName',
        	'#password':'password'
        },
        onRender: function(){
        	this.stickit();
        	return this;
        },
        events:{
        	'click #btnLogin': 'login',
        },
        login: function(){
        	
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
        },
        onBeforeDestroy: function () {
            this.unstickit();
        }
    });
    return LoginView;
});