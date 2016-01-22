(function () {
    'use strict';

    angular
        .module('ip.router')
        .factory('StateHistory', StateHistory);

    StateHistory.$inject = ['Session'];
    function StateHistory(Session) {

        var currentHistory, SESSION_KEY = 'state-history';

        return ({
            setState: setState,
            getState: getState,
            removeState: removeState
        });

        function setState(url, state) {
            currentHistory = Session.retrieve(SESSION_KEY) || {};

            currentHistory[url] = state;

            Session.save(SESSION_KEY, currentHistory);
        }

        function getState(url) {
            currentHistory = Session.retrieve(SESSION_KEY) || {};

            return currentHistory[url];
        }

        function removeState(url) {
            currentHistory = Session.retrieve(SESSION_KEY) || {};

            delete currentHistory[url];

            Session.save(SESSION_KEY, currentHistory);
        }
    }
})();