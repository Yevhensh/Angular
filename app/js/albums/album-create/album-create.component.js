'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.albumCreate.component',['ngMaterial'])
  .component('albumCreate', {
    templateUrl: './app/js/albums/album-create/album-create.template.html'
  /*  controller: ['Album',
     function AlbumCreateController(Album) {
       var ctrl = this;
       Album.get(function(data){
           ctrl.albums = data.albums;
       });
     }]
     */
  });
