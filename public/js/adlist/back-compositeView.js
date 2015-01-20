/**
 * Created by gireesh.babu on 20/01/15.
 */
define(["backbone","marionette","handlebars","text!adlist/compositeTemplate.hb","backbone.stickit",
        "adlist/itemView","compositeView"],

    function(Backbone, Marionette, Handlebars, CollectionTemplate, Stickit, ItemView, CollectionView){


        var CollectionView = Backbone.Marionette.CompositeView.extend({

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