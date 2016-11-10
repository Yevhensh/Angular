var GroupFactory = require('./group.service.js');

describe('Groups factory ', function() {
    var GroupResource;

    // Before each test load our app.students.resource module
    beforeEach(angular.mock.module(GroupFactory.name));

    // Before each test set our injected Users factory (_Student_) to our local Users variable
    beforeEach(inject(function(_Group_) {
        GroupResource = _Group_;
    }));

    // A simple test to verify the Student factory exists
    it('should exist', function() {
        expect(GroupResource).toBeDefined();
    });

});