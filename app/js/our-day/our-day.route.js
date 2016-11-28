'use strict';

module.exports = angular
  .module('app.ourDay.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
        name: 'ourDayList',
        url: '/our-days',
        template: '<our-day-list></our-day-list>'
    }).state({
        name: 'ourDayEdit',
        url: '/our-days/{ourDayId}/edit',
        template: '<our-day-edit></our-day-edit>'
    });
});
