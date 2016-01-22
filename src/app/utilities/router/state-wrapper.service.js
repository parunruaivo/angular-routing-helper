(function () {
    'use strict';

    angular
        .module('ip.router')
        .factory('StateWrapper', StateWrapper);

    StateWrapper.$inject = ['$state', 'Session', '$rootScope', '$timeout'];
    function StateWrapper($state, Session, $rootScope, $timeout) {

        var stateToRestore, SESSION_KEY = 'previous-state';

        return ({
            nextStateAndRestore: nextStateAndRestore,
            previousState: previousState
        });

        function nextStateAndRestore(stateName, stateParams, stateOptions, restore) {

            stateToRestore = Session.retrieve(SESSION_KEY) || {};

            stateToRestore[stateName] = {
                name: $state.$current.name,
                params: $state.$current.ownParams,
                restore: restore
            };

            Session.save(SESSION_KEY, stateToRestore);

            $state.go(stateName, stateParams, stateOptions);

        }

        function previousState() {
            var nextState;
            stateToRestore = Session.retrieve(SESSION_KEY) || {};

            nextState = angular.copy(stateToRestore[$state.$current.name]);

            delete stateToRestore[$state.$current.name];

            Session.save(SESSION_KEY, stateToRestore);


            if (nextState.restore) {
                $timeout(function timeout() {
                    $rootScope.$broadcast('restore-state@' + nextState.name, nextState.restore);
                }, 0);

            }
            nextStateAndRestore(nextState.name, nextState.params);
        }
    }
})();