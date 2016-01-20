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
            StateWrapper.nextState('three');
        }

        $scope.$on('$stateChangeSuccess', function () {
            vm.state.fromState = arguments[3].name;
        });
    }
})();