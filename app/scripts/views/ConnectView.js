/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ConnectviewView = Backbone.View.extend({
        template: JST['app/scripts/templates/ConnectView.ejs'],
        initialize: function(){
        	console.log("ConnectView");
        },

        events: {
        	'click button[data-type="connect"]': 'connectToCluster',
        	'keyup input[data-type="stringURL"]': 'readURL',
        	'click ul[data-type="refreshOptions"] li a': 'refreshOptions'
        },

        readURL : function(ev){
        	var value = ev.currentTarget.value;
        },

        refreshOptions: function(ev){
        	ev.preventDefault();
        	var mapping = {'None': 0, '5sec':5, 'Constant':1},
        	refreshType = ev.currentTarget.dataset.type;
        	this.$el.find('button[data-type="refreshAction"]').text(refreshType).append('<span class="caret"></span>');
        },	

        connectToCluster: function(){
        	
        },

        render: function(){
        	var data = {};
        	console.log('Render ConnectView');
        	this.$el.html(this.template(data));
        	return this;
        }
    });

    return ConnectviewView;
});
