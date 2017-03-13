// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller('MainCtrl', function($scope) {

    var sandboxHandler = Plaid.create({
      clientName: 'Plaid example',
      env: 'sandbox',
      product: ['auth'],
      key: '[PLAID_PUBLIC_KEY]',
      selectAccount: true,
      forceIframe: true, // required
      onSuccess: function(public_token, metadata) {
        // send public_token to server to exchange for access_token
        console.log(public_token, metadata);
      },
      onExit: function(error, metadata) {
        if (error != null) {
          // Plaid API error
          console.log(error);
        }
        console.log(metadata);
      }
    });

    $scope.openLink = function() {
      console.log('open the link modal');
      sandboxHandler.open();
    };

  });
