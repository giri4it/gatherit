//the require library is configuring paths
require.config({
    paths: {
                //tries to load jQuery from Google's CDN first and falls back
                //to load locally
        "jquery": "libs/jquery/jquery",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        "marionette": "libs/marionette/lib/backbone.marionette.min",
        "bootstrap":"libs/bootstrap/dist/js/bootstrap.min",
        "handlebars":"libs/handlebars/handlebars.min",
        "text":"libs/text/text",
        "backbone.stickit":"libs/backbone.stickit/backbone.stickit"
    },
    shim: {
    	"jquery":{
        	exports: "$"
        },
        "backbone": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Backbone"
        },
        "bootstrap":{
        	deps:["jquery"]
        }
        
    },
        //how long the it tries to load a script before giving up, the default is 7
    waitSeconds: 10
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'underscore', 'backbone', 'app','bootstrap'], function(jquery, _, Backbone, App,BootStrap){
   // new App;
});