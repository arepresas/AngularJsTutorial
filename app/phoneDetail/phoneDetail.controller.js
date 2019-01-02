'use strict';

angular.module('phonecatApp').controller('PhoneDetailController', PhoneDetailController);

PhoneDetailController.$inject = ['$scope', '$http', '$routeParams', 'PhoneService'];

function PhoneDetailController(scope, http, routeParams, phoneService) {
    scope.setImage = function setImage(imageUrl) {
        scope.mainImageUrl = imageUrl;
    };
    scope.phone = phoneService.get({phoneId: routeParams.phoneId}, function(phone) {
        scope.setImage(phone.images[0]);
    });
}