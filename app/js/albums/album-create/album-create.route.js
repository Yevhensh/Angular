'use strict';

module.exports = angular
  .module('app.albumCreate.route', [])
  .config(function($stateProvider) {
    var albumCreate = {
  	  name: 'albumCreate',
  	  url: '/albums/new',
  	  templateUrl: './app/js/albums/album-create/album-create.template.html',
      controller: ['$scope', '$state', '$stateParams', 'Album',
      function AlbumCreateController ($scope, $state, $stateParams, Album) {
        $scope.album = new Album();

        $scope.addAlbum = function() {
          $scope.album.$save(function() {
            $state.go('albums');
          });
        };
    }]
    };
    $stateProvider.state(albumCreate);
});
