(function () {
    'use strict';

    angular
        .module('app')
        .factory('RouterHelper', RouterHelper);

    function RouterHelper() {
        return ({
            stateChanged: stateChanged,
            locationChanged: locationChanged
        });

        function stateChanged() {

        }

        function locationChanged() {

        }
    }
})();