'use strict';

module.exports = angular
  .module('app.albumList.route', [])
  .config(function($stateProvider) {
    var albumList = {
  	  name: 'albums',
  	  url: '/albums',
  	  template: '<album-list></album-list>'
    };
    $stateProvider.state(albumList);
});
