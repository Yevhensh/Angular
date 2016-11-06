'use strict';

ActionCable = require('actioncable');

module.exports = angular.module('app.chat')
  .component('chat',{
     templateUrl: './app/js/cable/cable.template.html',
     controller: ['$scope',
      function CableController($scope){
        var cable = ActionCable.createConsumer('wss://localhost:3000/cable');

        cable.subscriptions.create('AppearanceChannel', {
          // normal channel code goes here...
        });
      }]


    //  ['$scope', 'ActionCableChannel', function SomeController($scope, ActionCableChannel){
    //   $scope.inputText = "";
    //   $scope.myData = [];
    //
    //   // connect to ActionCable
    //   var consumer = new ActionCableChannel("MyChannel");
    //   var callback = function(message){ $scope.myData.push(message); };
    //   // consumer.subscribe(callback).then(function(){
    //   //   $scope.sendToMyChannel = function(message){ consumer.send(message, 'send_a_message'); };
    //   //   $scope.$on("$destroy", function(){
    //   //     consumer.unsubscribe().then(function(){ $scope.sendToMyChannel = undefined; });
    //   //   });
    //   // });
    // }]
  });
