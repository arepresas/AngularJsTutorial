'use strict';

angular.
    module('phonecatApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            // $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/phones', {
                template: '<ng-phone-list></ng-phone-list>'
            }).
            when('/phones/:phoneId', {
                template: '<ng-phone-detail></ng-phone-detail>'
            }).
            otherwise('/phones');
        }
    ]);