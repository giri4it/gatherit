define(["backbone"],
		function(Backbone){

    var ItemModel = Backbone.Model.extend({
    	url:'/pushMessage',
    	defaults:{
    	  ad_id:"",
    	  user_fk:"",
    	  file_type:""
    	}
    });
    return ItemModel;
});