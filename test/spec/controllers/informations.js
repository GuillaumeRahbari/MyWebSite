'use strict';

describe('Controller: InformationsCtrl', function () {

  // load the controller's module
  beforeEach(module('myWebSiteApp'));

  var InformationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformationsCtrl = $controller('InformationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
