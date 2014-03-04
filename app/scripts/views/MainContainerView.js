/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MainContainerView = Backbone.View.extend({
        template: JST['app/scripts/templates/MainContainerView.ejs'],

        initialize: function(){
        	_.bindAll(this, 'render', 'afterRender'); 
        	this.childView = [];
        	var self = this;
        	this.render = _.wrap(this.render, function(render) {
				render();						
				self.afterRender();
				return self;
			});			
        },

        render: function(){
        	var data = {};
        	console.log('Render MainContainerView');
        	this.$el.html(this.template(data));
        	return this;
        },

        afterRender: function(){
        	
        },

        beforeClose: function(){
        	_.each(this.childViews, function(childView){
      			if (childView.close){
       				childView.close();
      			}
    		});
        }
    });

    return MainContainerView;
});
