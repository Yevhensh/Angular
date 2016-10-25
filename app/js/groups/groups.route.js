'use strict';
module.exports = angular
    .module('app.groups.route', [])
    .config(function($stateProvider) {
        $stateProvider.state({
            name: 'groups',
            url: '/groups',
            template: '<group-list></group-list>'
        }).state({
            name: 'groupCreate',
            url: '/groups/new',
            template: '<group-create></group-create>'
        });
            //.state({
        //     name: 'groupEdit',
        //     url: '/groups/:id/edit',
        //     template: '<group-edit></group-edit>'
        // }).state({
        //     name: 'group',
        //     url: '/groups/:id',
        //     template: '<group-detail></group-detail>'
        // })
    });