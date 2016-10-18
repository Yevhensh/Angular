'use strict';

module.exports = angular
  .module('app.albumCreate.route', [])
  .config(function($stateProvider) {
    var albumCreate = {
  	  name: 'albumCreate',
  	  url: '/albums/new',
  	  templateUrl: './app/js/albums/album-create/album-create.template.html',
       controller: 'AlbumCreateController'
    };
    $stateProvider.state(albumCreate);
});
