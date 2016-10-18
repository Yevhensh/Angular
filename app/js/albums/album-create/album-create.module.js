var albumCreateController = require('./album-create.controller.js'),
    albumCreateRoute = require('./album-create.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumCreate', [
  albumCreateController.name,
  albumCreateRoute.name,
  albumService.name
]);
