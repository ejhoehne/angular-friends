app.controller('FriendController', function($scope)
{
	$.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(response){
		$scope.friends= response.results;
		$scope.sortOrder= 'false'; 
		$scope.sortBy= 'name';
		$scope.$apply();

	});



});






