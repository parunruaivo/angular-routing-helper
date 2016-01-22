(function () {
    'use strict';
    angular
        .module('app')
        .controller('StateTwoController', StateTwoController);

    StateTwoController.$inject = ['$scope', 'StateWrapper'];
    function StateTwoController($scope, StateWrapper) {
        var vm = this;

        vm.state = {
            name: 'Two',
            date: new Date()
        };

        vm.back = back;
        vm.next = next;

        function back() {
            StateWrapper.previousState();
        }

        function next() {
            StateWrapper.nextStateAndRestore('three', null, null, vm.state);
        }

        $scope.$on('restore-state@two', function () {
            vm.state = arguments[1];
        });
    }
})();