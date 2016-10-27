// 'use strict';

// module.exports = angular
//   .module('app.teacherDetail.component',['ngMaterial'])
//   .component('teacherDetail', {
//     templateUrl: './app/js/teachers/detail/teacher-detail.template.html',
//     controller: TeacherDetailController
//   });

//   TeacherDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'Teacher'];

//   function TeacherDetailController ($scope, $state, $window, $stateParams, Teacher) {
//     $scope.teacherDetail = Teacher.get({ id: $stateParams.teacherId });

//     $scope.deleteTeacher = function(teacherDetail) {
//         teacherDetail.$delete({ id: $stateParams.teacherId }, function() {
//           $window.location.href = '/teachers';
//         });
//     };
//   }

'use strict';

module.exports = angular
    .module('app.teacherDetail.component', [])
    .component('teacherDetail', {
        controller: TeacherDetailController,
        templateUrl: './app/js/teachers/detail/teacher-detail.template.html'
    });

TeacherDetailController.$inject = ['Teacher', '$stateParams'];

function TeacherDetailController(Teacher, $stateParams) {
    var ctrl = this;
    ctrl.item = Teacher.get({ id: $stateParams.id });
}


// 'use strict';

// module.exports = angular
//   .module('app.schooldetail.component',['ngMaterial'])
//   .component('schooldetail', {
//         templateUrl: '/app/js/schools/components/school-detail/school-detail.template.html',
//         controller: SchoolDetailController
//     });

//   SchoolDetailController.$inject = ['$scope', '$state', '$window', '$stateParams', 'School'];
  
//   function SchoolDetailController ($scope, $state, $window, $stateParams, School) {
  
//     $scope.schoolDetail = School.get({ id: $stateParams.schoolId });
//     $scope.deleteSchool = function(schoolDetail) {
//         schoolDetail.$delete({ id: $stateParams.schoolId }, function() {
//           $window.location.href = '/schools';
//         });
//     };
//   }

 
