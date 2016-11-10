'use strict';

ActionCable = require('actioncable');
// require('angular-actioncable');
// require('angular-websocket');

module.exports = angular.module('app.chat.component', [])
  .component('chat',{
     templateUrl: './app/js/cable/cable.template.html',
     controller: ['$scope',
      function CableController($scope, ActionCableChannel){
        var ctrl = this;
        var cable = ActionCable.createConsumer();
        ctrl.channel = cable.subscriptions.create("ChatChannel");
        $scope.inputText = "";
        $scope.myData = [];
        cable.subscriptions.create({channel: "ChatChannel",

          connected: function() {},
          // $scope.sendToMyChannel = function(inputText) {
          //           ctrl.channel.send(inputText);
          //         },
          disconnected: function() {},
          received: function(data) {
            console.log(data);
            document.getElementById("messages").append(data.sent_by);
            document.getElementById("messages").append(data);
          },
          speak:  $scope.sendToMyChannel = function(inputText) {
                    ctrl.channel.send({ sent_by: 'Zoryana', body: 'This is a cool chat app.' });
          }
          // function(message){ctrl.channel.perform_method("speak",message)}

        });
        // $scope.sendToMyChannel = function(inputText) {
        //   ctrl.channel.send(inputText);
        // }

      }]

  });
  // $scope.sendToMyChannel = function(message) {
  //
  //   cable.send({ sent_by: "Paul", body: "This is a cool chat app." });
  //
  // },
