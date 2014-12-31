define(["backbone"],
		function(Backbone){
	
    var LoginModel = Backbone.Model.extend({
    	url:'/login',
    	defaults:{
    	loginName:"",
    	password:""
    	}
    });
    return LoginModel;
});