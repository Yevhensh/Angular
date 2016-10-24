'use strict';

module.exports = angular
  .module('app.albums.route', [])
  .config(function($stateProvider) {
    
    var albumList = {
  	  name: 'albums',
  	  url: '/albums',
  	  template: '<album-list></album-list>'
    };
    var albumDetail = {
      name: 'album',
      url: 'albums/{albumId}',
      template: '<album-detail></album-detail>'
    };
    var albumCreate = {
      name: 'albumCreate',
      url: '/albums/new',
      template: '<album-create></album-create>'
    };
    var albumEdit = {
      name: 'albumEdit',
      url: '/albums/{albumId}/edit',
      template: '<album-edit></album-edit>'
    };

    $stateProvider.state(albumList);
    $stateProvider.state(albumDetail);
    $stateProvider.state(albumCreate);
    $stateProvider.state(albumEdit);
});
