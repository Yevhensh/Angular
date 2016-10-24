describe('Students factory', function() {
  var Students;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('app.studentList.resource'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Students_) {
    Students = _Students_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(Students).toBeDefined();
  });
});
