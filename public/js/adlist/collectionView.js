define(["backbone","marionette","handlebars","text!adlist/collectionTemplate.hb","backbone.stickit",
         "adlist/itemView"],

    function(Backbone, Marionette, Handlebars, CollectionTemplate, Stickit, ItemView){


        var CollectionView = Backbone.Marionette.CollectionView.extend({

            template:  Handlebars.compile(CollectionTemplate),
            id:'image-list-head',
            tagName: 'div',
            initialize: function(){
                this.template =  Handlebars.compile(CollectionTemplate);
            },
            childView: ItemView,

            childViewContainer: '#image-list-container'

    });

    return CollectionView;
});