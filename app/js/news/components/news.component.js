'use strict';
var angular = require('angular');

module.exports = angular
  .module('app.news.component',['ngMaterial'])
  .component('news', {
    templateUrl: '/app/js/news/components/news.template.html',
    controller: newsController,
  });

newsController.$inject =['newsResource'];
function newsController(newsResource) {
  var ctrl = this;

  newsResource.get(function(data){
      ctrl.news = data.news;
  });
};
