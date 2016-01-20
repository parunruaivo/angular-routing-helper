(function () {
    'use strict';

    angular
        .module('router')
        .factory('StateWrapper', StateWrapper);

    StateWrapper.$inject = ['$state', 'Session'];
    function StateWrapper($state, Session) {

        var stateToRestore, SESSION_KEY = 'previous-state';

        return ({
            nextState: next,
            previousState: previous
        });

        function next(stateName, stateParams, stateOptions) {

            stateToRestore = Session.retrieve(SESSION_KEY) || {};

            stateToRestore[stateName] = {
                name: $state.$current.name,
                params: $state.$current.ownParams
            };

            Session.save(SESSION_KEY, stateToRestore);

            $state.go(stateName, stateParams, stateOptions);

        }

        function previous() {
            var nextState;
            stateToRestore = Session.retrieve(SESSION_KEY) || {};

            nextState = angular.copy(stateToRestore[$state.$current.name]);

            delete stateToRestore[$state.$current.name];

            Session.save(SESSION_KEY, stateToRestore);

            next(nextState.name, nextState.params);
        }
    }
})();