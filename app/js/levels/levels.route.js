'use strict';
module.exports = angular
    .module('app.levels.route', [])
    .config(function($stateProvider) {
        $stateProvider.state({
            name: 'levels',
            url: '/levels',
            template: '<level-list></level-list>'
        }).state({
            name: 'levelCreate',
            url: '/levels/new',
            template: '<level-create></level-create>'
        }).state({
            name: 'levelEdit',
            url: '/levels/:id/edit',
            template: '<level-edit></level-edit>'
        }).state({
            name: 'level',
            url: '/levels/:id',
            template: '<level-detail></level-detail>'
        })
    });