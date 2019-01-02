'use strict';

angular.module('phonecatApp').directive('ngPhoneList', ngPhoneListDirective);

function ngPhoneListDirective() {
    return {
        restrict: 'E',
        templateUrl: 'phoneList/phoneList.template.html',
        controller: 'PhoneListController'
    };
}