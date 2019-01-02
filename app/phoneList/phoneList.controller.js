'use strict';

angular.module('phonecatApp').controller('PhoneListController', PhoneListController);

PhoneListController.$inject = ['$scope', '$http', 'PhoneService'];

function PhoneListController(scope, http, phoneService) {
    scope.phoneList = phoneService.query();
    scope.orderProp = 'age';
}