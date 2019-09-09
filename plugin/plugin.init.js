'use strict';

angular.module('owsWalletPlugin').config([
  '$stateProvider',
function($stateProvider) {

	$stateProvider
    .state('home', {
      url: '/home',
	    controller: 'HomeCtrl',
	    templateUrl: 'views/home/home.html'
    });

}])
.run([
  '$rootScope',
  '$log',
  '$state',
function($rootScope, $log, $state) {

  owswallet.Plugin.ready(function() {
    $state.go('home');
  });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    $log.debug('Applet route change start from:', fromState.name || '-', ' to:', toState.name);
  });

}]);
