require('angular-base64-upload');

module.exports = angular
  .module('app_profile_component',[])
  .component('profile', {
    bindings: {
      settings: '='
    },
    templateUrl: 'app/js/profile/components/profile.template.html',
    controller: ProfileController,
  })
  .directive('chooseFile', function() {
          return {
              link: function(scope, elem, attrs) {
                  var button = elem.find('button');
                  var input = angular.element(elem[0].querySelector('input#fileInput'));

                  button.bind('click', function() {
                      input[0].click();
                  });

                  input.bind('change', function(e) {
                      scope.$apply(function() {
                          var files = e.target.files;
                          if (files[0]) {
                              scope.fileName = files[0].name;
                          } else {
                              scope.fileName = null;
                          }
                      });
                  });
              }
          };
      });

ProfileController.$inject =['userResource','UserService','Auth'];
function ProfileController(userResource,UserService,Auth) {
  var ctrl = this;
  ctrl.setting = {userId: Auth.getCurrentUserId()};

  ctrl.user = UserService.getUser(ctrl.setting.userId).then(handleSuccess, handleError);
  function handleSuccess(data) {
    ctrl.user = data.user;
  };
  function handleError(data) {
    ctrl.responseMessage = response.statusText;
  };

  ctrl.submit = function () {
    ctrl.responseMessage = '';
    UserService.updateUser(ctrl.setting.userId, ctrl.user).then(handleSuccess, handleError);
    function handleSuccess(data) {
      ctrl.responseMessage = 'You successfully updated';
      ctrl.user = data.user;
    }
    function handleError(data) {
      ctrl.errors = response.data.errors;
    }
  }
}
