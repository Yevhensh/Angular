var angular = require('angular'),

    albumDetailRoute = require('./album-detail.route.js'),

    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumDetail', [

  albumDetailRoute.name,

  albumService.name
]);
