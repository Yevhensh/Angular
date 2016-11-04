'use strict';
module.exports = angular
    .module('app.attendances.route', [])
    .config(function($stateProvider) {
        $stateProvider.state({
            name: 'attendances',
            url: '/attendances',
            template: '<attendance-list></attendance-list>'
        });
        //     .state({
        //     name: 'groupCreate',
        //     url: '/groups/new',
        //     template: '<group-create></group-create>'
        // }).state({
        //     name: 'group',
        //     url: '/groups/:id',
        //     template: '<group-detail></group-detail>'
        // }).state({
        //     name: 'groupEdit',
        //     url: '/groups/:id/edit',
        //     template: '<group-edit></group-edit>'
        // });

    });