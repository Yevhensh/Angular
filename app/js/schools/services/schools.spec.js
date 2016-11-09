var SchoolFactory = require('./schools.service.js');

describe('Schools factory ', function() {
  var School;

  // Before each test load our app.schools. module
  beforeEach(angular.mock.module(SchoolFactory.name));

  // Before each test set our injected School factory to our local School variable
  beforeEach(inject(function(_School_) {
    School = _School_;
  }));

  // A simple test to verify the School factory exists
  it('should exist', function() {
    expect(School).toBeDefined();
  });

});