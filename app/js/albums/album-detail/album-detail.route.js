'use strict';

module.exports = angular
  .module('app.albumDetail.route', [])
  .config(function($stateProvider) {
    var albumDetail = {
  	  name: 'album',
  	  url: 'albums/{albumId}',
      templateUrl: './app/js/albums/album-detail/album-detail.template.html',
       controller: 'AlbumDetailController'
    };
    $stateProvider.state(albumDetail);
  });
