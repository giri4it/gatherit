define(["jquery","backbone","marionette","handlebars","text!adlist/compositeTemplate.hb","backbone.stickit",
         "adlist/itemView"],

    function($, Backbone, Marionette, Handlebars, CompositeTemplate, Stickit, ItemView){


        var CompositeView = Backbone.Marionette.CompositeView.extend({

            template:  Handlebars.compile(CompositeTemplate),
            id:'image-list-head',
            tagName: 'div',
            childView: ItemView,

            childViewContainer: '#image-list-container',
            events:{
                'click #home': 'goHome'
            },
            initialize: function(){

            },
            goHome: function(e){

                var globalChannel = Backbone.Wreqr.radio.channel('global');
                globalChannel.vent.trigger("init:home");
            }

    });

    return CompositeView;
});