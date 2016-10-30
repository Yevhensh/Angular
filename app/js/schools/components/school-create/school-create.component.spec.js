'use strict';

describe('schoolcreate', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('schoolcreate'));

  // Test the controller
  describe('SchoolCreateController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/schools/new').respond(200, httpResponse);

      ctrl = $componentController('schoolcreate');
    }));
   
  });

});

