'use strict';

module.exports = angular
  .module('app.admins.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'admins',
      url: '/admins',
      template: '<admin-list></admin-list>'
    }).state({
      name: 'adminEdit',
      url: '/admins/{adminId}/edit',
      template: '<admin-edit></admin-edit>'
    }).state({
      name: 'adminDetail',
      url: 'admins/{adminId}',
      template: '<admin-detail></admin-detail>'
    }).state({
      name: 'adminCreate',
      url: '/admins/new',
      template: '<admin-create></admin-create>'
    });
  });
