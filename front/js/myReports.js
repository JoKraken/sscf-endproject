app.controller('myReportCtrl', function($scope) {
    $scope.catoId = undefined;


    fetch('/item/'+$scope.catoId+'/'+localStorage.temp, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then((response) => {
        $scope.reports = response;
        $scope.reportNumber = response.length;
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

    $scope.pressTitle = function (id) {
        fetch('/item/'+id+'/'+localStorage.temp, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then((response) => {
                $scope.reports = response;
                $scope.$apply();
            }).catch(error => console.error('Error:', error));
    };

    $scope.view = function (id) {
        $scope.reports.forEach(function (item) {
            if (id == item._id) {
                if(item.image != "") document.querySelector('.modal-body img').src = 'uploads/' + item.image;
                document.querySelector('#titelView').innerHTML = item.title;
                document.querySelector('#desView').innerHTML = item.details;
                let date = new Date(item.time);
                document.querySelector('#timeView').innerHTML = "("+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+") ";
                document.querySelector('#myModal').style.display = "block";
            }
        });
    };

    $scope.edit = function (id) {
        $scope.reports.forEach(function (item) {
            if (id == item._id) {
                document.querySelector('#editForm').action = document.querySelector('#editForm').action + "?id=" + item._id;
                document.querySelectorAll('#catoSelect option').forEach(function (option) {
                    if(option.value == item.category._id) option.selected = true;
                });
                document.querySelector('#title').value = item.title;
                document.querySelector('#des').value = item.details;
                document.querySelector('#editModal').style.display = "block";
            }
        });
    };

    $scope.delete = function (id) {
        var url = '/item/'+id;

        fetch(url, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => window.location.reload())
            .catch(error => console.error('Error:', error));
    }
});