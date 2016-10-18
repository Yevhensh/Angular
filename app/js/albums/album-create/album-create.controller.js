'use strict';

module.exports = angular
  .module('app.albumCreate.controller',['ngMaterial'])
  .controller( 'AlbumCreateController', AlbumCreateController);
  AlbumCreateController.$inject = ['$scope', '$state',  'Album'];
  function AlbumCreateController ($scope, $state,  Album) {
    $scope.album = new Album();

    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('albums');
      });
    };
  };
