(function () {
    'use strict';

    angular
        .module('app')
        .run(AppRun);

    AppRun
        .$inject = ['routerHelper'];
    function AppRun(routerHelper) {

        routerHelper.configureStates(getStates(), '/one');

        function getStates() {
            return [
                {
                    state: 'one',
                    config: {
                        url: '/one',
                        template: '<one></one>'
                    }
                },
                {
                    state: 'two',
                    config: {
                        url: '/two',
                        template: '<two></two>'
                    }
                },
                {
                    state: 'three',
                    config: {
                        url: '/three',
                        template: '<three></three>'
                    }
                }
            ];
        }
    }
})();