/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function(){
        	console.log('router');
        },

        routes: {
        	'': 'home'
        },

        home: function(){
            var self = this;
            require(['views/ConnectView', 'models/ConnectModel'], function(ConnectView, ConnectModel){
                var connectView = new ConnectView({model: new ConnectModel()});
                self.showView('#connectURL', connectView)
            });
            
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
