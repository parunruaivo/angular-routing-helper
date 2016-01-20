(function () {
    'use strict';

    angular
        .module('router')
        .factory('StateHistory', StateHistory);

    StateHistory.$inject = ['Session'];
    function StateHistory(Session) {

        var currentHistory, SESSION_KEY = 'state-history';

        return ({
            setState: setState,
            getState: getState,
            removeState: removeState
        });

        function setState(stateName, state) {
            currentHistory = Session.retrieve(SESSION_KEY) || {};

            currentHistory[stateName] = state;

            Session.save(SESSION_KEY, currentHistory);
        }

        function getState(stateName) {
            currentHistory = Session.retrieve(SESSION_KEY) || {};

            return currentHistory[stateName];
        }

        function removeState(stateName) {
            currentHistory = Session.retrieve(SESSION_KEY) || {};

            delete currentHistory[stateName];

            Session.save(SESSION_KEY, currentHistory);
        }
    }
})();