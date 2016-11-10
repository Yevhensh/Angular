var dailyReportsListComponent = require('./components/dailyreport-list/dailyreport-list.component.js'),
    dailyReportsRoute = require('./dailyreports.route.js'),
    dailyReportResource = require('./services/dailyreport.service.js');

module.exports = angular.module('app.journal', [
    dailyReportsListComponent.name,
    dailyReportsRoute.name,
    dailyReportResource.name
]);
