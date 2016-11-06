'use strict';

module.exports = angular
  .module('app.albums.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
        name: 'albums',
        url: '/albums',
        template: '<album-list></album-list>'
    }).state({
        name: 'albumCreate',
        url: '/albums/new',
        template: '<album-create></album-create>'
    }).state({
        name: 'albumEdit',
        url: '/albums/{albumId}/edit',
        template: '<album-edit></album-edit>'
    }).state({
        name: 'album',
        url: '/albums/{albumId}',
        template: '<album-detail></album-detail>'
    });
});
