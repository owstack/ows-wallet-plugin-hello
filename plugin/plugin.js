'use strict';

angular.module('owsWalletPlugin', [
	'gettext',
	'ionic',
	'ngLodash',
	'owsWalletPluginClient',
  'owsWalletPlugin.api',
  'owsWalletPlugin.controllers',
  'owsWalletPlugin.services'
]);

angular.module('owsWalletPlugin.api', []);
angular.module('owsWalletPlugin.controllers', []);
angular.module('owsWalletPlugin.services', []);