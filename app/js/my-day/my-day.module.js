var myDayListComponent = require('./components/my-day-list/my-day-list.component.js'),
    myDayEditComponent = require('./components/my-day-edit/my-day-edit.component.js'),
    myDayService = require('./my-day.service.js'),
    myDayRoute = require('./my-day.route.js');

module.exports = angular.module("app.myDay", [
  myDayListComponent.name,
  myDayEditComponent.name,
  myDayService.name,
  myDayRoute.name
]);
