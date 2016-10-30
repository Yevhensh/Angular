'use strict';
module.exports = angular
    .module('app.main.permission', [])
    .directive('permissions', ['Type', function(Type){
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attr){
                var attrVal = attr["permissions"];
                var type = Type();
                //getting string vals
                type = type.toString();
                attrVal = attrVal.toString();
                if(type !== attrVal) {
                    element.children().remove();
                    element.remove();
                }
            }
        }
    }]);