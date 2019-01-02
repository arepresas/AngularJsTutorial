'use strict';

describe('phonecatApp', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('phonecatApp'));

    // Test the controller
    describe('PhoneListController', function() {
        var $httpBackend, $controller, $rootScope, ctrl, scope;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_) {
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
            ctrl = $controller('PhoneListController');
        }));

        it('should create a `phones` property with 2 phones fetched with `$http`', function() {
            expect(ctrl.phoneList).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.phoneList).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });

        it('should set a default value for the `orderProp` property', function() {
            expect(ctrl.orderProp).toBe('age');
        });

    });

});