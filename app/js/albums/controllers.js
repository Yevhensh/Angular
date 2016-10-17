

angular.module('app.controllers', [])
.controller('AlbumCreateController', function($scope, $state, $stateParams, Movie) {
  $scope.album = new Album();  //create new movie instance. Properties will be set via ng-model on UI

  $scope.addAlbum = function() { //create a new movie. Issues a POST to /api/movies
    $scope.album.$save(function() {
      $state.go('albums'); // on success go back to home i.e. movies state.
    });
  };
});
