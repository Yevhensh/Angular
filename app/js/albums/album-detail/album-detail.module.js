var albumDetailController = require('./album-detail.controller.js'),
    albumDetailRoute = require('./album-detail.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumDetail', [
  albumDetailController.name,
  albumDetailRoute.name,
  albumService.name
]);
