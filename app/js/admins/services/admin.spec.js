var AdminFactory = require('./admin.service.js');

describe('Admins factory ', function() {
  var AdminResource;

  // Before each test load our app.admins.resource module
  beforeEach(angular.mock.module(AdminFactory.name));

  // Before each test set our injected Users factory (_Admin_) to our local Users variable
  beforeEach(inject(function(_AdminResource_) {
    AdminResource = _AdminResource_;
  }));

  // A simple test to verify the Admin factory exists
  it('should exist', function() {
    expect(AdminResource).toBeDefined();
  });


  it ('should be correct', function() {
    expect(1 + 1).toEqual(2);
  });


});



