/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ClusterStateModel = Backbone.Model.extend({
        defaults: {
        	'state' : ''
        }
    });

    return ClusterStateModel;
});
