'use strict'

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module('app.admins.resource', [
      require('angular-resource'),
      coreServices.name
    ])
    .factory('AdminResource', AdminResource);

    AdminResource.$inject = ['$resource','appSettings'];
    function AdminResource($resource, appSettings){
            return $resource(appSettings.SERVER_PATH + 'admins/:id', null,
            {
              'update':{'method':'PUT'}
            }
          );
    }
