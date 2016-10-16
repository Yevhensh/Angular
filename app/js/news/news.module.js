var angular = require('angular'),
    newsComponent = require('./components/news.component.js'),
    newsRoute = require('./news.route.js'),
    newsResource = require('./services/news.service.js');

module.exports = angular.module('app.news', [
  newsComponent.name,
  newsRoute.name,
  newsResource.name
]);
