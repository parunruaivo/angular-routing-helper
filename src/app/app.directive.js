(function () {
    'use strict';
    angular
        .module('app')
        .directive('app', App);

    function App() {
        return ({
            scope: {},
            controller: 'AppController',
            controllerAs: 'vm',
            restrict: 'E',
            bindToController: {},
            templateUrl: 'angular-routing-helper/src/app/app.html'
        });
    }
})();