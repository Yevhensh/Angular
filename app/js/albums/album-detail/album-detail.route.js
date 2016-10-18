'use strict';

module.exports = angular
  .module('app.albumDetail.route', [])
  .config(function($stateProvider) {
    var albumDetail = {
  	  name: 'album',
  	  url: 'albums/{albumId}',
      templateUrl: './app/js/albums/album-detail/components/album-detail.template.html',
      controller: ['$scope', '$stateParams', 'Album', '$window',
       function AlbumViewController($scope, $stateParams, Album, $window) {
        $scope.albumDetail = Album.get({ id: $stateParams.albumId });
        $scope.deleteAlbum = function(albumDetail) {
            albumDetail.$delete({ id: $stateParams.albumId }, function() {
              $window.location.href = '/albums';
            });
        };

      }
    ]

    };
    $stateProvider.state(albumDetail);
  });
