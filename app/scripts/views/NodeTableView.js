/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NodeTableView = Backbone.View.extend({
        template: JST['app/scripts/templates/NodeTableView.ejs'],

        render: function(){
        	console.log('Render NodeTableView', this.model.toJSON());
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }
    });

    return NodeTableView;
});
