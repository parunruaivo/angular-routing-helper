(function () {
    'use strict';

    angular
        .module('ip.router')
        .factory('StateHelper', RouterHelper);

    RouterHelper.$inject = ['$location', '$state', 'StateHistory'];

    function RouterHelper($location, $state, StateHistory) {
        var preventCall = [];

        return ({
            stateChanged: stateChanged,
            locationChanged: locationChanged
        });

        function stateChanged() {
            var entry;

            if (preventCall.pop() === 'stateChanged') {
                return;
            }
            entry = {
                name: $state.current.name,
                params: $state.params
            };
            StateHistory.setState($state.current.url, entry);
            preventCall.push('locationChanged');
            $location.url($state.current.url);
        }

        function locationChanged() {
            var entry;

            if (preventCall.pop() === 'locationChanged') {
                return;
            }
            entry = StateHistory.getState($state.current.url);
            if (entry) {
                preventCall.push('stateChanged');
                $state.go(entry.name, entry.params, {location: false});

            }

        }
    }
})();