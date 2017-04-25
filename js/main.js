(function() {
    'use strict';

    angular
        .module('routing', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider) {

            // $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false
            // });

            $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: '../partials/home.html',
                        controller: 'MainController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('add', {
                url: '/add',
                views: {
                    'content': {
                        templateUrl: '../partials/add.html',
                        controller: 'AddController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('detail', {
                url: '/photo/:id',
                views: {
                    'content': {
                        templateUrl: '../partials/detail.html',
                        controller: 'DetailController',
                        controllerAs: 'vm'
                    }
                }
            })
        })
})();


