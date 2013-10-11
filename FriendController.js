app.controller('FriendController', function($scope)
{
	$.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(response){
		$scope.friends= response.results;
		console.log(response.results);
	});

//$scope.$apply(); --refreshes views in the scope


});






