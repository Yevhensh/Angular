'use strict';

module.exports = angular
    .module('app.levelList.component', [])
    .component('levelList', {
        templateUrl: '/app/js/levels/components/level-list/level-list.template.html',
        controller: LevelListController
    });

    LevelListController.$inject = ['Level', '$window'];

    function LevelListController(Level, $window) {
        var ctrl = this;
        var getLevels = function(){
            Level.get(function(data){
                ctrl.levels = data.levels;
            });
        };

        ctrl.deleteLevel = function (levelId){
            Level.delete({ id: levelId });
            getLevels();
            $window.location.href = '/levels'
        };

        getLevels();
    }