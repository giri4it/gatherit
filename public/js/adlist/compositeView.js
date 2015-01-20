define(["backbone","marionette","handlebars","text!adlist/compositeTemplate.hb","backbone.stickit",
         "adlist/itemView"],

    function(Backbone, Marionette, Handlebars, CompositeTemplate, Stickit, ItemView){


        var CompositeView = Backbone.Marionette.CompositeView.extend({

            template:  Handlebars.compile(CompositeTemplate),
            id:'image-list-head',
            tagName: 'div',
            initialize: function(){

            },
            childView: ItemView,

            childViewContainer: '#image-list-container'

    });

    return CompositeView;
});