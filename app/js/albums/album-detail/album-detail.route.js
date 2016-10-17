'use strict';

module.exports = angular
  .module('app.albumDetail.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    var albumDetail = {
  	  name: 'album',
  	  url: 'albums/{albumId}',
      template: '<album-detail></album-detail>'

    };
    $stateProvider.state(albumDetail);
  });
