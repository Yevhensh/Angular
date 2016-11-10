'use strict';

module.exports = angular
  .module('app.albumList.component', [])
  .component('albumList', {
    templateUrl: './app/js/albums/components/album-list/album-list.template.html',
    controller: AlbumListController
  });
  AlbumListController.$inject = ['Album'];
    function AlbumListController(Album) {
      var ctrl = this;

      Album.get(function(data){
        ctrl.albums = data.albums;
        ctrl.photos = data.photos;
      });
  }
