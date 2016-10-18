var angular = require('angular'),

    listRoute = require('./list.route.js'),
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.list', [

  listRoute.name,
  albumService.name
]);
