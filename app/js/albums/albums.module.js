var albumListComponent = require('./components/album-list/album-list.component.js'),
    albumDetailComponent = require('./components/album-detail/album-detail.component.js'),
    albumCreateComponent = require('./components/album-create/album-create.component.js'),
    albumEditComponent = require('./components/album-edit/album-edit.component.js'),
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
