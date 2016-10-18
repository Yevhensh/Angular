var angular = require('angular'),

    albumEditRoute = require('./album-edit.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumEdit', [

  albumEditRoute.name,
  albumService.name
]);
