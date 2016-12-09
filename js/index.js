/*$(function(){
	$("#codeDiv").load("two_sum.html"); 
});
*/

var myApp = angular.module('myApp', []);

myApp.controller("appCtrl", function($scope, $http) {
	
	$scope.showLcList = false;
	$http.get("leetcodes.json").then(function(response) {
        $scope.leetcodes = response.data.leetcodes;
    });
	
	$scope.switchToAlgorithm = function() {
		$scope.showLcList = true;
	}
});

/**
myApp.controller("lcListCtrl", function($scope, $http) {
	$http.get("leetcodes.json").then(function(response) {
        $scope.leetcodes = response.data.leetcodes;
		alert($scope.leetcodes);
    }); 
});
**/