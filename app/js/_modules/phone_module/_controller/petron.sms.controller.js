(function() {
  'use strict';

  angular.module('petron.modules.phone')
    .controller('controller.phonebox.sms', ['$scope', '$rootScope',
      'petron.phony',
      function($scope, $rootScope, petronPhony) {
        $rootScope.title = 'phone_module';
        $scope.messages = [];

        petronPhony.getMessages().then(function(messages) {
          $scope.messages = messages;
        }, function(err) {
          console.log(err);
        });
      }
    ]);
})();
