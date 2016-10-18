'use strict';

module.exports = angular
  .module('app.list.route', [])
  .config(function($stateProvider) {
    var list = {
  	  name: 'list',
  	  url: '/list',
  	  templateUrl: './app/js/albums/list/list.template.html',
      controller: ['$scope', '$state', '$stateParams', 'Album',
      function ListController ($scope, $state, $stateParams, Album) {
        $scope.albumsData = Album.query();
        $scope.albums = $scope.albumsData.albums;
    }]
    };
    $stateProvider.state(list);
});
