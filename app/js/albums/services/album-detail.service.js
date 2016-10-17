

var angular = require('angular');
var albumService  = require('./album.service.js');
module.exports = angular
   .module("app.albumDetail.service", [
            albumService.name
          ])
     .factory("AlbumService",AlbumService);
      AlbumService.$inject = ['Album'];
       function AlbumService(Album){
           var service = {};
             service.getAlbum = getAlbum;
                service.updateAlbum = updateAlbum;
                   return service;
                       function getAlbum(id){
                               return Album.get({id:id}).$promise
                                        .then(function(response){
                                                  return response;
                                                        });     }
                   function updateAlbum(id,album){
                         return Album.update({id:id},album).$promise
                                   .then(function(response){
                                              return response;
                                                    });     } }
