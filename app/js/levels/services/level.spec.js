var LevelFactory = require('./level.service.js');

describe('Levels factory ', function() {
    var LevelResource;

    // Before each test load our app.students.resource module
    beforeEach(angular.mock.module(LevelFactory.name));

    // Before each test set our injected Users factory (_Student_) to our local Users variable
    beforeEach(inject(function(_Level_) {
        LevelResource = _Level_;
    }));

    // A simple test to verify the Student factory exists
    it('should exist', function() {
        expect(LevelResource).toBeDefined();
    });

});