'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.albumCreate.component',['ngMaterial'])
  .component('albumCreate', {
    templateUrl: './app/js/albums/album-create/album-create.template.html',
    controller: ['$scope', '$state', '$stateParams', 'Album',
    function AlbumCreateController ($scope, $state, $stateParams, Album) {
      $scope.album = new Album();  //create new movie instance. Properties will be set via ng-model on UI

      $scope.addAlbum = function() { //create a new movie. Issues a POST to /api/movies
        $scope.album.$save(function() {
          $state.go('albums'); // on success go back to home i.e. movies state.
        });
      };
  }]
});
