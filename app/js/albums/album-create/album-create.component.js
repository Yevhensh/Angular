'use strict';

module.exports = angular
  .module('app.albumCreate.component',['ngMaterial'])
  .component('albumCreate', {
    templateUrl: './app/js/albums/album-create/album-create.template.html',
    controller: ['Album','$scope', '$state',
     function AlbumCreateController(Album, $scope, $state) {
       $scope.album = new Album();

       $scope.addAlbum = function() {
         $scope.album.$save(function() {
           $state.go('albums');
         });
       };

       $scope.types = ["Group","Level","School"];
     }]
  });




// 'use strict';
//
// module.exports = angular
//   .module('app.albumCreate.controller',['ngMaterial'])
//   .controller( 'AlbumCreateController', AlbumCreateController);
//   AlbumCreateController.$inject = ['$scope', '$state',  'Album'];
//   function AlbumCreateController ($scope, $state,  Album) {
//     $scope.album = new Album();
//
//     $scope.addAlbum = function() {
//       $scope.album.$save(function() {
//         $state.go('albums');
//       });
//     };
//   };
