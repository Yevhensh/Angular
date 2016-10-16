var angular = require('angular');

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.students.resource", [
      coreServices.name,
      require('angular-resource')])
    .factory("studentsResource",studentsResource);

studentsResource.$inject = ['$resource','appSettings'];

function studentsResource($resource,appSettings){
        return $resource(appSettings.SERVER_PATH + "students",null);
    }
