'use strict';

module.exports = angular
  .module('app.myDay.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
        name: 'myDayList',
        url: '/my-days',
        template: '<my-day-list></my-day-list>'
    }).state({
        name: 'myDayEdit',
        url: '/my-days/{myDayId}/edit',
        template: '<my-day-edit></my-day-edit>'
    });
});
