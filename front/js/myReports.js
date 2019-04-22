app.controller('myReportCtrl', function($scope) {

    fetch('/myReports/'+localStorage.temp, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then((response) => {
        $scope.reports = response;
        $scope.$apply();
    }).catch(error => console.error('Error:', error));
    
});