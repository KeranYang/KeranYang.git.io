var lcListApp = angular.module('lcListApp', []);

lcListApp.controller("lcCtrl", function($scope, $http) {
	
	$scope.showLcList = false;
	$http.get("../leetcode_solutions/leetcodes.json").then(function(response) {
        $scope.leetcodes = response.data.leetcodes;
		$scope.sortType = 'id';
    });
});
