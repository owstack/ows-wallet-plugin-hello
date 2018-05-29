'use strict';

angular.module('owsWalletPlugin.services').service('helloService', function (Session) {

  var root = {};

  root.init = function(cb) {
    session = Session.getInstance();
    root.appletName = session.plugin.header.name;
    cb();
  };

  return root;
});
