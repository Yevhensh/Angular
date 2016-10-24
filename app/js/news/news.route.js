'use strict';
module.exports = angular
    .module('app.news.route', [])
    .config(function($stateProvider) {
        $stateProvider.state({
            name: 'newss',
            url: '/news',
            template: '<news-list></news-list>'
        }).state({
            name: 'newsCreate',
            url: '/news/new',
            template: '<news-create></news-create>'
        }).state({
            name: 'newsEdit',
            url: '/news/:id/edit',
            template: '<news-edit></news-edit>'
        }).state({
            name: 'news',
            url: '/news/:id',
            template: '<news-detail></news-detail>'
        })
    });