(function () {
    'use strict';
    angular
        .module('app')
        .controller('StateThreeController', StateThreeController);

    StateThreeController.$inject = ['$scope','StateWrapper'];
    function StateThreeController($scope,StateWrapper) {
        var vm = this;

        vm.state = {
            name: 'Three',
            date: new Date()
        };

        vm.back = back;
        vm.next = next;

        function back() {
            StateWrapper.previousState();
        }

        function next() {
            StateWrapper.nextStateAndRestore('one', null, null, vm.state);
        }

        $scope.$on('restore-state@three', function (restore) {
            vm.state = arguments[1];
        });
    }
})();