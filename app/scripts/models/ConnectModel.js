/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ConnectModel = Backbone.Model.extend({
        defaults: {
        	connectUrl: "http://localhost:9200",
        	clusterState: "/_cluster/state"
        }
    });

    return ConnectModel;
});
