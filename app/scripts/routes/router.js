/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function(){
        	console.log('router');
            require(['views/ConnectView', 'models/ConnectModel'], 
                function(ConnectView, ConnectModel){
                    var connectView = new ConnectView({model: new ConnectModel()});
                    $('#connectURL').html(connectView.render().el);
            });
        },

        routes: {
        	'': 'home',
            'connect/:id' : 'connect'
        },

        home: function(){
            var self = this;
            require(['views/MainContainerView'], function(MainContainerView){
                    var mainContainerView = new MainContainerView();
                    self.showView('#main-content', mainContainerView);
            });
        },

        connect: function(id){
            var self = this;
            console.log(atob(id));
            require(['views/NodeTableView', 'models/ClusterStateModel'], 
                function(NodeTableView, ClusterStateModel){
                    var clusterStateModel = new ClusterStateModel();
                    clusterStateModel.url = atob(id);
                    clusterStateModel.fetch().done(function(){
                        var nodeTableView = new NodeTableView({model: clusterStateModel});
                        self.showView('#main-content', nodeTableView);
                    });
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
