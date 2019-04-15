app.controller('addCtrl', function($scope) {
    $scope.logedIn = (localStorage.login == "true") ? true : false;
    $scope.id = localStorage.temp;
    document.querySelector('#uid').value = $scope.id.split('"')[1];

    if($scope.logedIn) {
        //$scope.category = [];
        const Http = new XMLHttpRequest();
        const url = '/category';
        Http.open("GET", url, true);
        Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.status == 200) {
                //console.log(Http.response);
                if ($scope.logedIn && Http.response != "") {
                    $scope.category = angular.copy(JSON.parse(Http.response));
                }
                $scope.$apply();
            }
        };
    }
});
