var angular = require('angular'),
    albumListComponent = require('./components/album-list.component.js'),
    albumListRoute = require('./album-list.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumList', [
  albumListComponent.name,
  albumListRoute.name,
  albumService.name
]);
