'use strict';

module.exports = angular
  .module('app.admins.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'admins',
      url: '/admins',
      templateUrl: './app/js/admins/list/admin-list.template.html',
      controller: 'AdminListController'
    }).state({
      name: 'adminEdit',
      url: '/admins/{adminId}/edit',
      templateUrl: './app/js/admins/edit/admin-edit.template.html',
      controller: 'AdminEditController'
    }).state({
      name: 'adminDetail',
      url: 'admins/{adminId}',
      templateUrl: './app/js/admins/detail/admin-detail.template.html',
      controller: 'AdminDetailController'
    }).state({
      name: 'adminCreate',
      url: '/admins/new',
      templateUrl: '/app/js/admins/create/admin-create.template.html',
      controller: 'AdminCreateController'
    });
  });
