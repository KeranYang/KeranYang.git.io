var lcListApp = angular.module('lcListApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

lcListApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
		.when("/", {
			templateUrl: "leetcode.html",
			controller: "lcCtrl"
		})
		.when("/solution_template", {
			templateUrl: "solution_template.html",
			controller: "solutionCtrl"
		})
		// .otherwise({ redirectTo: '/'})
		;
}]);

lcListApp.controller("lcCtrl", function($scope, srvShareData, $location, $http) {
	
	$http.get("../leetcode_solutions/leetcodes.json").then(function(response) {
        $scope.leetcodes = response.data.leetcodes;
		$scope.sortType = 'id';
    });
	
	//$scope.dataToShare = [];
	$scope.dataToShare = "";
  
	$scope.shareMyData = function (myValue) {
		$scope.dataToShare = myValue;
		//alert(myValue);
		srvShareData.addData($scope.dataToShare);
		window.location.href = "solution_template.html";
	}
});

lcListApp.controller('solutionCtrl', function($scope, srvShareData) {
  
  $scope.sharedData = srvShareData.getData();
  $scope.templateUrl = function() {
	templateUrl = "../leetcode_solutions/" + $scope.sharedData;
    return templateUrl;
  }

});

lcListApp.service('srvShareData', function($window) {
        var KEY = 'App.SelectedValue';

        var addData = function(newObj) {
			/*
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            } else {
                mydata = [];
            }
            mydata.push(newObj);
            $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
			*/
			var mydata = newObj;
			$window.sessionStorage.setItem(KEY, mydata);
        };

        var getData = function(){
			/*
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            }
            return mydata || [];
			*/
			var mydata = $window.sessionStorage.getItem(KEY);
            return mydata || "";
        };

        return {
            addData: addData,
            getData: getData
        };
    });
