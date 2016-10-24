'use strict';

module.exports = angular
  .module('app.albumEdit.component',['ngMaterial'])
  .component('albumEdit', {
    templateUrl: './app/js/albums/album-edit/album-edit.template.html',
    controller: ['Album','$scope', '$state', '$stateParams',
    function AlbumEditController (Album, $scope, $state, $stateParams) {

      $scope.updateAlbum = function() {
        $scope.albumDetail.$update({ id: $stateParams.albumId }, function() {
          $state.go('albums');
        });
      };

      $scope.loadAlbum = function() {
        $scope.albumDetail = Album.get({ id: $stateParams.albumId });
      };
      $scope.loadAlbum();

    }]
  });



// 'use strict';
//
// module.exports = angular
//   .module('app.albumEdit.controller',['ngMaterial'])
//   .controller( 'AlbumEditController', AlbumEditController);
//   AlbumEditController.$inject = ['$scope', '$state', '$stateParams', 'Album'];
//   function AlbumEditController ($scope, $state, $stateParams, Album) {
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
//   }
