var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

myApp.controller("lcCtrl", function($scope, $http) {
	
	$http.get("leetcodes.json").then(function(response) {
        $scope.leetcodes = response.data.leetcodes;
		$scope.sortType = 'id';
    });
	
});

myApp.controller("jbCtrl", function($scope, $http) {
	
	$http.get("javaBasicsNotes.json").then(function(response) {
        $scope.javaBasicsNotes = response.data.notes;
    });
	
});

