var angular = require('angular'),
    navigationComponent = require('./components/navigation.component.js');

module.exports = angular.module("app.nav", [
    //components
    navigationComponent.name
]);
