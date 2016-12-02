/*$(function(){
	$("#codeDiv").load("two_sum.html"); 
});
*/

var myApp = angular.module('myApp', []);

myApp.controller("menuCtrl", function($scope) {
	
	$scope.switchToAlgorithm = function() {
		$("#codeDiv").load("two_sum.html");
	}
	
	$scope.switchToDesignPattern = function() {
		$("#codeDiv").load("two_sum.html");
	}
	
	$scope.switchToJava = function() {
		$("#codeDiv").load("two_sum.html");
	}
	
	$scope.switchToWeb = function() {
		$("#codeDiv").load("two_sum.html");
	}
	
});