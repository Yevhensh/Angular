var albumListComponent = require('./album-list/album-list.component.js'),
    albumDetailComponent = require('./album-detail/album-detail.component.js'),
    albumCreateComponent = require('./album-create/album-create.component.js'),
    albumEditComponent = require('./album-edit/album-edit.component.js'),
    albumService = require('./album.service.js'),
    albumsRoute = require('./albums.route.js');

module.exports = angular.module("app.albums", [
  albumCreateComponent.name,
  albumEditComponent.name,
  albumListComponent.name,
  albumDetailComponent.name,
  albumService.name,
  albumsRoute.name
]);
