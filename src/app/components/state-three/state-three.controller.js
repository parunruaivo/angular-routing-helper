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
            StateWrapper.nextState('one');
        }

        $scope.$on('$stateChangeSuccess',function(){
            vm.state.fromState = arguments[3].name;
        });
    }
})();