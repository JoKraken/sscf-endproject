app.controller('addCtrl', function($scope) {
    $scope.logedIn = (localStorage.login == "true") ? true : false;
    $scope.id = localStorage.temp;
    if(localStorage.temp != undefined) document.querySelector('#uid').value = $scope.id;

    if($scope.logedIn) {
        $scope.categories = [];

        fetch('/category', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then((response) => {
            if ($scope.logedIn) {
                $scope.categories = response;
            }
            $scope.$apply();
        }).catch(error => console.error('Error:', error));
    }
});
