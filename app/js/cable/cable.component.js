'use strict';

ActionCable = require('actioncable');

module.exports = angular.module('app.chat.component', [])
  .component('chat',{
     templateUrl: './app/js/cable/cable.template.html',
     controller: ['$scope',
      function CableController($scope){
        var cable = ActionCable.createConsumer();
        $scope.inputText = "";
        $scope.myData = [];
        cable.subscriptions.create('ChatChannel', {
          // normal channel code goes here...
          connected: function sendToMyChannel(message) {
            // cable.send(message);
          },
          disconnected: function() {},
          received: function(data) {

          }

        });
      }]

  });
