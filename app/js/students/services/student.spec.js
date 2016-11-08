var StudentFactory = require('./student.service.js');

describe('Students factory ', function() {
  var StudentResource;

  // Before each test load our app.students.resource module
  beforeEach(angular.mock.module(StudentFactory.name));

  // Before each test set our injected Users factory (_Student_) to our local Users variable
  beforeEach(inject(function(_StudentResource_) {
    StudentResource = _StudentResource_;
  }));

  // A simple test to verify the Student factory exists
  it('should exist', function() {
    expect(StudentResource).toBeDefined();
  });

});