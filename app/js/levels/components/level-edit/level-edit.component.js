'use strict';

module.exports = angular
    .module('app.levelsEdit.component',['ngMaterial'])
    .component('levelEdit', {
        templateUrl: '/app/js/levels/components/level-edit/level-edit.template.html',
        controller: LevelEditController
    });

    LevelEditController.$inject = ['Level','$scope', '$state', '$stateParams'];

    function LevelEditController (Level, $scope, $state, $stateParams) {
        $scope.updateLevel = function() {
            $scope.levelDetail.$update({ id: $stateParams.id }, function() {
                $state.go('levels');
            });
        };

        $scope.loadLevel = function() {
            $scope.levelDetail = Level.get({ id: $stateParams.id });
        };
        
        $scope.loadLevel();
    }