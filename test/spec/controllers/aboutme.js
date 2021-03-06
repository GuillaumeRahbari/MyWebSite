'use strict';

describe('Controller: AboutmeCtrl', function () {

  // load the controller's module
  beforeEach(module('myWebSiteApp'));

  var AboutmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutmeCtrl = $controller('AboutmeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
