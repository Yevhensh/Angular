'use strict';

module.exports = angular
  .module('app.login.interceptor', [])
  .factory('AuthInterceptor', AuthInterceptor);

// automatically attach Authorization header
AuthInterceptor.$inject = ['$q', '$window', '$location'];
function AuthInterceptor($q, $window, $location) {
  return {
    request: function(config) {
      var token = $window.localStorage.getItem('auth_token') ||
                  $window.sessionStorage.getItem('auth_token');
        if (token) {
          var getToken = JSON.parse(token);
          config.headers.Authorization = getToken.auth_token;
        }
        return config;
    },
    responseError: function(response) {
      if (response.status === 401) {
        $window.localStorage.removeItem('auth_token') &&
        $window.sessionStorage.removeItem('auth_token');
        $location.path('/login');
      }
      return $q.reject(response);
    }
  }
}
