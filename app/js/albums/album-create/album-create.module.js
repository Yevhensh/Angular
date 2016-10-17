var angular = require('angular'),
    albumCreateComponent = require('./album-create.component.js'),
    albumCreateRoute = require('./album-create.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumCreate', [
  albumCreateComponent.name,
  albumCreateRoute.name,
  albumService.name
]);
