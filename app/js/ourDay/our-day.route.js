'use strict';

module.exports = angular
  .module('app.ourDay.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
        name: 'ourDayList',
        url: '/our-days',
        template: '<our-day-list></our-day-list>'
    }).state({
        name: 'ourDayCreate',
        url: '/our-days/new',
        template: '<our-day-create></our-day-create>'
    }).state({
        name: 'ourDayDetail',
        url: '/our-days/{ourDayId}',
        template: '<our-day-detail></our-day-detail>'
    }).state({
        name: 'ourDayEdit',
        url: '/our-days/{ourDayId}/edit',
        template: '<our-day-edit></our-day-edit>'
    });
});
