var angular = require('angular'),

    albumCreateRoute = require('./album-create.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumCreate', [

  albumCreateRoute.name,
  albumService.name
]);
