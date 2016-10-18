var albumListModule = require('../albums/album-list/album-list.module.js'),
    albumDetailModule = require('../albums/album-detail/album-detail.module.js'),
    albumCreateModule = require('../albums/album-create/album-create.module.js'),
    albumEditModule = require('../albums/album-edit/album-edit.module.js');

module.exports = angular.module("app.albums", [
  albumCreateModule.name,
  albumEditModule.name,
  albumListModule.name,
  albumDetailModule.name,
]);
