var StudentFactory = require('./schools.service.js');

describe('Schools factory ', function() {
  var SchoolResource;

  // Before each test load our app.schools.resource module
  beforeEach(angular.mock.module(SchoolFactory.name));

  // Before each test set our injected School factory to our local School variable
  beforeEach(inject(function(_SchoolResource_) {
    SchoolResource = _SchoolResource_;
  }));

  // A simple test to verify the School factory exists
  it('should exist', function() {
    expect(SchoolResource).toBeDefined();
  });

});