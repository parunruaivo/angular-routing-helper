(function () {
    'use strict';

    angular
        .module('app')
        .factory('Session', Session);

    function Session() {
        return ({
            save: save,
            retrieve: retrieve,
            clear: clear
        });

        function save(key, value) {
            sessionStorage.setItem(key, angular.isUndefined(value) ? null : JSON.stringify(value));
        }

        function retrieve(key) {
            return JSON.parse(sessionStorage.getItem(key));
        }

        function clear() {
            sessionStorage.clear();
        }
    }
})();