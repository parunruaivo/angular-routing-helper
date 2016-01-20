(function () {
    'use strict';
    angular
        .module('router',[])
        .run(Run);

    Run.$inject = ['StateHelper', '$rootScope'];
    function Run(StateHelper, $rootScope) {
        $rootScope.$on('$stateChangeSuccess', function () {
            StateHelper.stateChanged();
        });
        $rootScope.$on('$locationChangeSuccess', function () {
            StateHelper.locationChanged();
        });
    }
})();