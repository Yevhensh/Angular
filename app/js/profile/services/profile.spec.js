var UserFactory = require('./user.services.js');

describe('Users factory ', function() {
  var userResource;

  // Before each test load our app.students.resource module
  beforeEach(angular.mock.module(UserFactory.name));

  // Before each test set our injected Users factory (_Student_) to our local Users variable
  beforeEach(inject(function(_userResource_) {
    userResource = _userResource_;
  }));

  // A simple test to verify the Student factory exists
  it('should exist', function() {
    expect(userResource).toBeDefined();
  });

});
