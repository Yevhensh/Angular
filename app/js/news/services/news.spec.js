var NewsFactory = require('./news.service.js');

describe('News factory ', function() {
  var News;

  // Before each test load our app.news.resource module
  beforeEach(angular.mock.module(NewsFactory.name));

  // Before each test set our injected News factory (_News_) to our local News variable
  beforeEach(inject(function(_News_) {
    News = _News_;
  }));

  // A simple test to verify the News factory exists
  it('should exist', function() {
    expect(News).toBeDefined();
  });

});