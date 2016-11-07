'use strict';

module.exports = angular
  .module('app.albumCreate.component', [])
  .component('albumCreate', {
    templateUrl: './app/js/albums/components/album-create/album-create.template.html',
    controller: AlbumCreateController
  });
  AlbumCreateController.$inject = ['$scope', '$state',  'Album'];
  function AlbumCreateController ($scope, $state,  Album) {
    $scope.album = new Album();

    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('albums');
      });
    };
  };
