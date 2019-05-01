app.controller('modalCtrl', function($scope) {

    fetch('/category/all', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then((response) => {
            $scope.categories = response;
            $scope.$apply();
        }).catch(error => console.error('Error:', error));

    $scope.close = function(id) {
        //console.log(id);
        document.querySelector('#'+id).style.display = "none";
    };
});
