'use strict';

module.exports = angular
  .module('app.albumCreate.component', [])
  .component('albumCreate', {
    templateUrl: './app/js/albums/components/album-create/album-create.template.html',
    controller: AlbumCreateController
  });
  AlbumCreateController.$inject = ['$scope', '$state',  'Album', 'Group', 'Level', 'School'];
  function AlbumCreateController ($scope, $state,  Album, Group, Level, School) {
    $scope.album = new Album();

    $scope.addAlbum = function() {
      $scope.album.$save(function() {
        $state.go('albums');
      });
    };

    // Provide the access to the related data
    $scope.types = ['Group','Level','School'];

    Group.get(function(data){
      $scope.groups = data.groups;
    });

    Level.get(function(data){
      $scope.levels = data.levels;
    });

    School.get(function(data){
      $scope.schools = data.schools;
    });

  };
