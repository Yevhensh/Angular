'use strict';
module.exports = angular
    .module('app.dailyreportList.component', [])
    .component('dailyreportList', {
        templateUrl: '/app/js/dailyreports/components/dailyreport-list/dailyreport-list.template.html',
        controller: DailyreportListController
    });

DailyreportListController.$inject = ['Dailyreport', '$window', '$scope'];

function DailyreportListController(Dailyreport, $window, $scope, $state) {

}