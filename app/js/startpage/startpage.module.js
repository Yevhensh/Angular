var startpageComponent = require('./components/startpage.component.js'),
    startpageRoute = require('./startpage.route.js');

module.exports = angular.module("app.startpage", [
  // components
  'app.startpage.component',
  startpageRoute.name
]);
