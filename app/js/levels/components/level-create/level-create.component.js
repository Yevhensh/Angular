'use strict';

module.exports = angular
    .module('app.levelCreate.component', [])
    .component('levelCreate', {
        controller: LevelCreateController,
        templateUrl: '/app/js/levels/components/level-create/level-create.template.html'
    });

LevelCreateController.$inject = ['Level', '$state', '$scope', '$stateParams'];

function LevelCreateController(Level, $state, $scope, $stateParams) {
    $scope.level = new Level();

    $scope.addLevel = function(){
        $scope.level.$save(function(){
            $state.go('levels');
        });
    }
}