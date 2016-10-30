'use strict';
module.exports = angular
    .module('app.main.permission', [])
    .directive('permissions', ['Type', function(Type){
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attr){
                var attrVal = attr["permissions"];
                attrVal = attrVal.toString();
                //getting permission roles array
                var permArr = attrVal.split(" ");
                var remov = true;

                var type = Type();
                type = type.toString();

                permArr.forEach(function(item) {
                    if (item == type){
                        remov = false;
                    }
                });
                if (remov){
                    element.children().remove();
                    element.remove();
                }
            }
        }
    }]);