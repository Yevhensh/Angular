var ourDayListComponent = require('./components/our-day-list/our-day-list.component.js'),
    ourDayEditComponent = require('./components/our-day-edit/our-day-edit.component.js'),
    ourDayService = require('./our-day.service.js'),
    ourDayRoute = require('./our-day.route.js');

module.exports = angular.module("app.ourDay", [
  ourDayListComponent.name,
  ourDayEditComponent.name,
  ourDayService.name,
  ourDayRoute.name
]);
