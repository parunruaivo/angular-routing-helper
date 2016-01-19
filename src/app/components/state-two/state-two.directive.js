(function () {
    'use strict';
    angular
        .module('app')
        .directive('two', Two);

    function Two() {
        return ({
            scope: {},
            controller: 'StateTwoController',
            controllerAs: 'vm',
            restrict:'E',
            bindToController: {},
            templateUrl: 'angular-routing-helper/src/app/components/state-two/state-two.html'
        });
    }
})();