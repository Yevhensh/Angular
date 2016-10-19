'use strict';

module.exports = angular
  .module('app.studentCreate.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'studentcreate',
      url: '/students/new',
      template: '<studentcreate></studentcreate>',
    });
});
