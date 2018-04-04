var charlieApp = angular.module('charlieApp', ['ngRoute']);

charlieApp.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    .when('/music', {
      templateUrl : 'pages/music.html',
      controller  : 'musicController'
    })

    .when('/art', {
      templateUrl : 'pages/art.html',
      controller  : 'artController'
    })

    .when('/photos', {
      templateUrl : 'pages/photos.html',
      controller  : 'photosController'
    })

    .when('/film', {
      templateUrl : 'pages/film.html',
      controller  : 'filmController'
    })

    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

charlieApp.controller('mainController', function($scope) {
  $scope.message = 'we home now';
});

charlieApp.controller('musicController', function($scope) {
  $scope.message = 'we in music now';
});

charlieApp.controller('artController', function($scope) {
  $scope.message = 'we art now';
});

charlieApp.controller('photosController', function($scope) {
  $scope.message = 'we photos now';
});


charlieApp.controller('filmController', function($scope) {
  $scope.message = 'we in film now';
});

charlieApp.controller('contactController', function($scope) {
  $scope.message = 'we contact now';
});
