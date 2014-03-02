/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ConnectModel = Backbone.Model.extend({
        defaults: {
        	connectUrl: "localhost:9200"
        }
    });

    return ConnectModel;
});
