'use strict';

module.exports = angular
  .module('app.parents.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'parents',
      url: '/parents',
      template: '<parent-list></parent-list>'
    }).state({
      name: 'parentEdit',
      url: '/parents/{parentId}/edit',
      template: '<parent-edit></parent-edit>'
    }).state({
      name: 'parentDetail',
      url: 'parents/{parentId}',
      template: '<parent-detail></parent-detail>'
    }).state({
      name: 'parentCreate',
      url: '/parents/new',
      template: '<parent-create></parent-create>'
    });
  });
