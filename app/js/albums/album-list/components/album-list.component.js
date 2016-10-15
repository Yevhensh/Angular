'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.albumList.component',['ngMaterial'])
  .component('albumList', {
    templateUrl: '/app/js/albums/album-list/components/album-list.template.html',
    controller: ['albumListService',
     function AlbumListController(albumListService) {
       var ctrl = this;

       albumListService.get(function(data){
           ctrl.albums = data.albums;
       });
     }]
  });
