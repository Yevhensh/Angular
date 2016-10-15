var angular = require('angular');
var angular = require('angular')
    albumListComponent = require('./components/album-list.component.js'),
    albumListRoute = require('./album-list.route.js'),
    albumListResource = require('./services/album-list.service.js');

module.exports = angular.module('app.albumList', [
  albumListComponent.name,
  albumListRoute.name,
  albumListResource.name
]);
