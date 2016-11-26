require('ng-img-crop-full-extended');
module.exports = angular
  .module('app_crop',['ngImgCrop'])
  .directive('chooseFile', function() {
          return {
              link: function($scope, elem, attrs) {
                  var button = elem.find('button');
                  var input = angular.element(elem[0].querySelector('input#fileInput'));

                  button.bind('click', function() {
                      input[0].click();
                  });

                  input.bind('change', function(e) {
                      $scope.$apply(function() {
                          var files = e.target.files;
                          if (files[0]) {
                              $scope.fileName = files[0].name;
                          } else {
                              $scope.fileName = null;
                          }
                      });
                  });
              }
          };
      })
  .controller('Crop', function($scope) {
       $scope.myImage='';
       $scope.myCroppedImage='';

       var handleFileSelect=function(evt) {
         var file=evt.currentTarget.files[0];
         var reader = new FileReader();
         reader.onload = function (evt) {
           $scope.$apply(function($scope){
             $scope.myImage=evt.target.result;
           });
         };
         reader.readAsDataURL(file);
       };
       angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
     });
