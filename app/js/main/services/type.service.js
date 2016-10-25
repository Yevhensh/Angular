var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.type.service', [])
    .factory('Type', Type);

Type.$inject = ['$window'];

function Type($window) {

    function getType(){
        var token = $window.localStorage.getItem('auth_token') ||
            $window.sessionStorage.getItem('auth_token');
        var user = "";
        if (token != undefined) {
            var parsed = JSON.parse(token);
            user = parsed.user.type;
        }
        return user;
    }
    return getType;
}
