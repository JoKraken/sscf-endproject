app.controller('settingCtrl', function($scope) {
    $scope.id = localStorage.temp;

    fetch('/user/all/'+$scope.id, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => res.json())
    .then((response) => {
        if (response.length == 1) {
            $scope.user = response[0];
        }else{
            document.querySelector('#uerror').style.display = "block";
        }
        $scope.$apply();
    }).catch(error => console.error('Error:', error));

    $scope.edit= function(id) {
        var data = {_id: $scope.id,
            name: document.querySelector('#Uname').value,
            pwd: document.querySelector('#Upassword').value};

        fetch('/user/changeUserSettings', {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status == 200) {
                document.querySelector('#uischange').style.display = "block";
                localStorage.setItem("name", data.name);
            }else{
                document.querySelector('#uerror').style.display = "block";
            }
        }).catch(error => console.error('Error:', error));
    }
});