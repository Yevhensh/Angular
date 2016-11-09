'use strict';

module.exports = angular
  .module('app.albumEdit.component', [])
  .component('albumEdit', {
    templateUrl: './app/js/albums/components/album-edit/album-edit.template.html',
    controller: AlbumEditController
  });
  AlbumEditController.$inject = ['$scope', '$state', '$stateParams', 'Album'];
  function AlbumEditController ($scope, $state, $stateParams, Album) {
    $scope.updateAlbum = function() {

      $scope.albumDetail.$update({ id: $stateParams.albumId }, function() {
        $state.go('albums');
      });

    };
    $scope.loadAlbum = function() {
      $scope.albumDetail = Album.get({ id: $stateParams.albumId });
    };
    $scope.loadAlbum();
  }
