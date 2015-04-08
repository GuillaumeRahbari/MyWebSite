'use strict';

describe('Controller: WorkexperienceCtrl', function () {

  // load the controller's module
  beforeEach(module('myWebSiteApp'));

  var WorkexperienceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkexperienceCtrl = $controller('WorkexperienceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
