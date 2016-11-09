var AlbumFactory = require('../album.service.js');

describe('Albums factory ', function() {
  var Album;

  // Before each test load the app.albums module
  beforeEach(angular.mock.module(AlbumFactory.name));

  // Before each test set the injected Album factory to the local Album variable
  beforeEach(inject(function(_Album_) {
    Album = _Album_;
  }));

  // A simple test to verify the Album factory exists
  it('should exist', function() {
    expect(Album).toBeDefined();
  });

});
