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
            StateWrapper.nextState('two');
        }

        $scope.$on('$stateChangeSuccess', function () {
            vm.state.fromState = arguments[3].name;
        });
    }
})();