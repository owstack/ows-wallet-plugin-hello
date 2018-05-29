'use strict';

angular.module('owsWalletPlugin.controllers').controller('HomeCtrl', function($scope, Session) {

	$scope.title = Session.getInstance().plugin.header.name;

});
