'use strict';
module.exports = angular
    .module('app.schools.route', [])
    .config(function($stateProvider) {
        $stateProvider.state({
          name: 'schoolCreate',
  	  		url: '/schools/new',
  	  		template: '<schoolcreate></schoolcreate>'
        }).state({
          name: 'schoolDetail',
  	  		url: 'schools/{schoolId}',
  	  		template: '<schooldetail></schooldetail>'
  	  	}).state({
          name: 'schoolEdit',
  	  		url: '/schools/{schoolId}/edit',
  	  		template: '<schooledit></schooledit>'
  	  	}).state({
          name: 'schools',
  	  		url: '/schools',
  	  		template: '<schoollist></schoollist>'
        });
    });