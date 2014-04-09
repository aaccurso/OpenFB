'use strict';
angular.module('OpenFBAngular.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('BrowseCtrl', function($scope, $state, $window, $log){
	openFB.init('225052281025509', $window.location.origin + '/templates/oauthcallback.html', $window.localStorage);

	$scope.fbLogin = function () {
		openFB.login('email',
		  function(oauthData) {
		      $log.info('Facebook login succeeded', JSON.stringify(oauthData));
		      $state.go('app.playlists');
		  },
		  function() {
		      $log.info('Facebook login failed');
	  });
	}
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
