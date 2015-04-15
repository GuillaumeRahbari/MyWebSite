'use strict';

describe('Directive: myProgressbar', function () {

  // load the directive's module
  beforeEach(module('myWebSiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-progressbar></my-progressbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myProgressbar directive');
  }));
});
