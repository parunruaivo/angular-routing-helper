(function () {
    'use strict';
    angular
        .module('app')
        .controller('StateOneController', StateOneController);

    StateOneController.$inject = ['$scope', 'StateWrapper'];
    function StateOneController($scope, StateWrapper) {
        var vm = this;

        vm.state = {
            name: 'One',
            date: new Date()
        };

        vm.back = back;
        vm.next = next;

        function back() {
            StateWrapper.previousState();
        }

        function next() {
            StateWrapper.nextStateAndRestore('two', null, null, vm.state);
        }

        $scope.$on('restore-state@one', function (restore) {
            vm.state = arguments[1];
        });
    }
})();