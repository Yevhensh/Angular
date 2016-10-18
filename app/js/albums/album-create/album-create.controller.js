'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.albumCreate.component',['ngMaterial'])
  .controller( 'AlbumCreateController', AlbumCreateController);
  AlbumCreateController.$inject = ['$scope', '$state', '$stateParams', 'Album'];
  function AlbumCreateController ($scope, $state, $stateParams, Album) {
    $scope.album = new Album();

    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('albums');
      });
    };
  };
