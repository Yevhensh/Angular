'use strict';
module.exports = angular
    .module('app.journals.route', [])
    .config(function($stateProvider) {
        $stateProvider.state({
            name: 'dailyreports',
            url: '/dailyreports',
            template: '<dailyreport-list></dailyreport-list>'
        });
    });
