(function () {
    'use strict';
    angular
        .module('app')
        .directive('one', One);

    function One() {
        return ({
            scope: {},
            controller: 'StateOneController',
            controllerAs: 'vm',
            restrict:'E',
            bindToController: {},
            templateUrl: 'angular-routing-helper/src/app/components/state-one/state-one.html'
        });
    }
})();