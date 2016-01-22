(function () {

    'use strict';
    angular
        .module('ip.router')
        .provider('routerHelper', RouterHelperProvider);

    RouterHelperProvider
        .$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function RouterHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

        var config = {
            resolveAlways: {}
        };

        $locationProvider.html5Mode(false);

        this.$get = RouterHelper;

        RouterHelper
            .$inject = ['StateHelper', '$rootScope', '$state'];

        function RouterHelper(StateHelper, $rootScope, $state) {

            init();

            return ({
                configureStates: configureStates,
                getStates: getStates
            });


            function configureStates(states, otherwisePath) {

                states.forEach(
                    function currentState(state) {

                        state.config.resolve = angular.extend(state.config.resolve || {}, config.resolveAlways);
                        $stateProvider.state(state.state, state.config);
                    });

                if (otherwisePath) {
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }


            function init() {
                updateRoutingData();
            }

            function getStates() {
                return $state.get();
            }

            function updateRoutingData() {
                $rootScope.$on('$stateChangeSuccess',
                    function () {
                        StateHelper.stateChanged();
                    }
                );
                $rootScope.$on('$locationChangeSuccess',
                    function () {
                        StateHelper.locationChanged();
                    }
                );
            }
        }
    }
})();