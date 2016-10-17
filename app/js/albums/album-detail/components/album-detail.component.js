'use strict';

var angular = require('angular');

 module.exports = angular
    .module('app.albumDetail',[])
       .component('albumDetail', {
          templateUrl: './app/js/albums/album-detail/components/album-detail.template.html',
          controller: ['Album','$stateParams',
            function AlbumDetailController(Album, $stateParams){

                this.album = Album.get({id:$stateParams.albumId});
            }]
          });
