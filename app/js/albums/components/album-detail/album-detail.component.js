'use strict';
require('angular-jk-carousel');

module.exports = angular
  .module('app.albumDetail.component', ['jkAngularCarousel'])
  .component('albumDetail', {
    templateUrl: './app/js/albums/components/album-detail/album-detail.template.html',
    controller: AlbumDetailController
  });
  AlbumDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'Album'];
  function AlbumDetailController ($scope, $state, $window, $stateParams, Album) {
    $scope.albumDetail = Album.get({ id: $stateParams.albumId });
    $scope.deleteAlbum = function(albumDetail) {
        albumDetail.$delete({ id: $stateParams.albumId }, function() {
          $window.location.href = '/albums';
        });
    };
  }
