'use strict';

module.exports = angular
    .module('app.levelDetail.component', [])
    .component('levelDetail', {
        controller: LevelShowController,
        templateUrl: '/app/js/levels/components/level-detail/level-detail.template.html'
    });

LevelShowController.$inject = ['Level', '$stateParams'];

function LevelShowController(Level, $stateParams) {
    var ctrl = this;
    ctrl.item = Level.get({ id: $stateParams.id });
}