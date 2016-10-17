var angular = require('angular'),
    albumDetailComponent = require('./components/album-detail.component.js'),
    albumDetailRoute = require('./album-detail.route.js'),
/**    albumDetailService = require('../services/album-detail.service.js')*/
    albumService = require('../services/album.service.js');

module.exports = angular.module('app.albumDetail', [
  albumDetailComponent.name,
  albumDetailRoute.name,
/*  albumDetailService.name,*/
  albumService.name
]);
