var angular = require('angular');

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.news.resource", [
      coreServices.name,
      require('angular-resource')])
    .factory("newsResource",newsResource);

newsResource.$inject = ['$resource','appSettings'];

function newsResource($resource,appSettings){
        return $resource(appSettings.SERVER_PATH + "news",null);
    }
