/*global define*/

define([
    'jquery',
    'backbone',
    'views/ConnectView'
], function ($, Backbone, ConnectView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function(){
        	console.log('router');
        },

        routes: {
        	'': 'home'
        },

        home: function(){
            console.log('home')
            var connectView = new ConnectView();
            this.showView('#connectURL', connectView)
        },

        showView: function(selector, view) {
            if (this.currentView)
                this.currentView.close();
            $(selector).html(view.render().el);
            this.currentView = view;
            return view;
        }

    });

    return RouterRouter;
});
