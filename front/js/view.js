app.controller('viewCtrl', function($scope) {
    $scope.catoId = undefined;

    fetch('/item/'+$scope.catoId, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then((response) => {
        $scope.reports = response;
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
    }).catch(error => console.error('Error:', error));
    
    $scope.view = function (id) {
        $scope.reports.forEach(function (item) {
            if (id == item._id) {
                document.querySelector('.modal-body img').src = 'uploads/' + item.image;
                document.querySelector('#titelView').innerHTML = item.title;
                document.querySelector('#desView').innerHTML = item.details;
                let date = new Date(item.time);
                document.querySelector('#timeView').innerHTML = "("+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+") ";
                document.querySelector('#myModal').style.display = "block";
            }
        });
    };

    $scope.pressTitle = function (id) {
        fetch('/item/'+id, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then((response) => {
            $scope.reports = response;
            $scope.$apply();
        }).catch(error => console.error('Error:', error));
    };

    $scope.toogleClick = function (num) {
        if(num){
            document.querySelector('#list').style.display = "block";
            document.querySelector('#map').style.display = "none";
        }else{
            document.querySelector('#list').style.display = "none";
            document.querySelector('#map').style.display = "block";
        }
    };
});