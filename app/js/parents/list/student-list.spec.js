var StudentList = require('./student-list.component.js');

describe('StudentListController', function() {
  beforeEach(angular.mock.module(StudentList.name));

  var $controller, StudentListController;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    StudentListController = $controller('StudentListController', {});
  }));

  it('should be defined', function(){
    expect(StudentListController).toBeDefined();
  });

});
