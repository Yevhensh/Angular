'use strict';

module.exports = angular
  .module('app.albumEdit.component', [])
  .component('albumEdit', {
    templateUrl: './app/js/albums/components/album-edit/album-edit.template.html',
    controller: AlbumEditController
  });
  AlbumEditController.$inject = ['$scope', '$state', '$stateParams', 'Album', 'Group', 'Level', 'School'];
  function AlbumEditController ($scope, $state, $stateParams, Album, Group, Level, School) {
    $scope.updateAlbum = function() {

      $scope.albumDetail.$update({ id: $stateParams.albumId }, function() {
        $state.go('albums');
      });

    };
    $scope.loadAlbum = function() {
      $scope.albumDetail = Album.get({ id: $stateParams.albumId });
    };
    $scope.loadAlbum();

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
  }
