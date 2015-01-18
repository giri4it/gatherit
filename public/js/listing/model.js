define(["backbone"],
		function(Backbone){	
    var ListingModel = Backbone.Model.extend({
    	url:'/pushMessage',
    	defaults:{
    	  add_id:"",
    	  file_type:""
    	}
    });
    return ListingModel;
});