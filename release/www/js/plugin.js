"use strict";angular.module("owsWalletPlugin",["gettext","ionic","ngLodash","owsWalletPluginClient","owsWalletPlugin.api","owsWalletPlugin.controllers","owsWalletPlugin.services"]),angular.module("owsWalletPlugin.api",[]),angular.module("owsWalletPlugin.controllers",[]),angular.module("owsWalletPlugin.services",[]),angular.module("owsWalletPlugin").config(function($stateProvider){$stateProvider.state("home",{url:"/home",controller:"HomeCtrl",templateUrl:"views/home/home.html"})}).run(function($rootScope,$state,$log,helloService){owswallet.Plugin.ready(function(){helloService.init(function(){$state.go("home")})}),$rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams){$log.debug("Applet route change start from:",fromState.name||"-"," to:",toState.name)})}),angular.module("owsWalletPlugin").run(["gettextCatalog",function(gettextCatalog){}]),angular.module("owsWalletPlugin.services").service("helloService",function(Session){var root={};return root.init=function(cb){session=Session.getInstance(),root.appletName=session.plugin.header.name,cb()},root}),angular.module("owsWalletPlugin.controllers").controller("HomeCtrl",function(){});