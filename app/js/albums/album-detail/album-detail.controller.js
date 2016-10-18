'use strict';

module.exports = angular
  .module('app.albumDetail.controller',['ngMaterial'])
  .controller( 'AlbumDetailController', AlbumDetailController);
  AlbumDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'Album'];
  function AlbumDetailController ($scope, $state, $window, $stateParams, Album) {
    $scope.albumDetail = Album.get({ id: $stateParams.albumId });
    $scope.deleteAlbum = function(albumDetail) {
        albumDetail.$delete({ id: $stateParams.albumId }, function() {
          $window.location.href = '/albums';
        });
    };
  }
