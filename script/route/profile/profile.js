angular.module('testy').controller('profileController', ['$scope', 'serverCommunicator', 
    function($scope, serverCommunicator) {
      
      $scope.oldUser = angular.copy($scope.globals.currentUser);
      $scope.save = function() {
        serverCommunicator.updateAccountAsync($scope.oldUser).then(
          function() {
            $scope.globals.currentUser = $scope.oldUser;
            $scope.globals.showGlobalAlert('success', 'Geschafft!', 'Profil wurde gespeichert');
          }, function() {
          });
      };
    }]);