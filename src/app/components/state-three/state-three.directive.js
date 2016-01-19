(function () {
    'use strict';
    angular
        .module('app')
        .directive('three', Three);

    function Three() {
        return ({
            scope: {},
            controller: 'StateThreeController',
            controllerAs: 'vm',
            restrict:'E',
            bindToController: {},
            templateUrl: 'angular-routing-helper/src/app/components/state-three/state-three.html'
        });
    }
})();