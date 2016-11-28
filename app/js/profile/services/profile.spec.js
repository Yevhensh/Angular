var UserFactory = require('./user.services.js');

describe('Users factory ', function() {
  var userResource;

  // Before each test load our user resource module
  beforeEach(angular.mock.module(UserFactory.name));

  // Before each test set our injected Users factory to our local Users variable
  beforeEach(inject(function(_userResource_) {
    userResource = _userResource_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(userResource).toBeDefined();
  });

});
