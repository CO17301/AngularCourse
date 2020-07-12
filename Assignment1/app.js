(function(){

  angular.module("LunchCheck",[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchitems = "";
    $scope.error = "";

    $scope.validate = function(){


      if ($scope.lunchitems == ""){
        $scope.error = "Please enter data first";

      }else{

        if ($scope.lunchitems.split(',').length <= 3){

          $scope.error = "Enjoy!";

        }else{
          $scope.error = "Too Much";

        }

      }
    }

  }

})();
