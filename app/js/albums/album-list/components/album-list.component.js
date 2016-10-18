'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.albumList.component',['ngMaterial'])
  .component('albumList', {
    templateUrl: '/app/js/albums/album-list/components/album-list.template.html',
    controller: ['Album','$scope', '$state',
     function AlbumListController(Album, $scope, $state) {
       var ctrl = this;
       Album.get(function(data){
           ctrl.albums = data.albums;
       });
     }]
  });
