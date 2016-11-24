'use strict';

module.exports = angular
  .module('app.myDay.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
        name: 'myDayList',
        url: '/my-days',
        template: '<my-day-list></my-day-list>'
    }).state({
        name: 'myDayCreate',
        url: '/my-days/new',
        template: '<my-day-create></my-day-create>'
    }).state({
        name: 'myDayDetail',
        url: 'my-days/{myDayId}',
        template: '<my-day-detail></my-day-detail>'
    }).state({
        name: 'myDayEdit',
        url: '/my-days/{myDayId}/edit',
        template: '<my-day-edit></my-day-edit>'
    });
});
