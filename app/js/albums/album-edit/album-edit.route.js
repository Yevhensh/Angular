'use strict';

module.exports = angular
  .module('app.albumEdit.route', [])
  .config(function($stateProvider) {
    var albumUpdate = {
  	  name: 'albumEdit',
  	  url: '/albums/{albumId}/edit',
  	  templateUrl: './app/js/albums/album-edit/album-edit.template.html',
      controller: 'AlbumEditController'
    //     $scope.updateAlbum = function() {
    //
    //       $scope.albumDetail.$update({ id: $stateParams.albumId }, function() {
    //         $state.go('albums');
    //       });
    //     };
    //     $scope.loadAlbum = function() {
    //       $scope.albumDetail = Album.get({ id: $stateParams.albumId });
    //     };
    //
    //     $scope.loadAlbum();
    // }]
    };
    $stateProvider.state(albumUpdate);
});
