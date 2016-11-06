'use strict';

module.exports = angular
  .module('app.chat.route', [])
  .config(function($stateProvider) {

    var chat = {
  	  name: 'chat',
  	  url: '/chat',
  	  template: '<chat></chat>'
    };
    $stateProvider.state(chat);
});
