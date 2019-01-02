'use strict';

angular.module('phonecatApp').directive('ngPhoneDetail', ngPhoneDetailDirective);

function ngPhoneDetailDirective() {
    return {
        restrict: 'E',
        templateUrl: 'phoneDetail/phoneDetail.template.html',
        controller: 'PhoneDetailController'
    };
}