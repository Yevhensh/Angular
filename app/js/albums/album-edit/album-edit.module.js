var albumEditController = require('./album-edit.controller.js'),
    albumEditRoute = require('./album-edit.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumEdit', [
  albumEditController.name,
  albumEditRoute.name,
  albumService.name
]);
