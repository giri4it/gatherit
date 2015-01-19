define(["backbone"],
		function(Backbone){	
    var ListingModel = Backbone.Model.extend({
    	url:'/pushMessage',
    	defaults:{
    	  add_id:"",
    	  user_fk:"",
    	  file_type:""
    	}
    });
    return ListingModel;
});