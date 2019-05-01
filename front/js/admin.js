app.controller('adminCtrl', function($scope) {
    if(localStorage.login == "false"){
        $scope.isAdmin = false;
        $scope.isLogin = false;
    }else if(localStorage.login == "true"){
        $scope.isLogin = true;
        document.querySelector('.tab-content').style.display = "none";
        $scope.users = [];
        $scope.categories = [];

        fetch('/user/isAdmin/'+localStorage.temp, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {

            if(res.status == 404){
                $scope.isAdmin = false;
                document.querySelector('.tab-content').style.display = "block";
                $scope.$apply();
            }else {
                $scope.isAdmin = true;

                fetch('/user/all', {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => res.json())
                    .then((response) => {
                        if (response != "") {
                            $scope.users = response;
                        }

                        fetch('/category/all', {
                            method: 'GET',
                            headers:{
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(res => res.json())
                            .then((response) => {
                                if (response != "") {
                                    $scope.categories = response;
                                }
                                document.querySelector('.tab-content').style.display = "block";
                                $scope.$apply();
                            }).catch(error => console.error('Error:', error));
                    }).catch(error => console.error('Error:', error));
            }

        }).catch(() => {
            $scope.isAdmin = false;
            document.querySelector('.tab-content').style.display = "block";
            $scope.$apply();
        });

    }

    $scope.changeStatus = function(id, status) {
        var url = '/user/changeAdminStatus';
        var data = {id: id, status: status};

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => window.location.reload())
          .catch(error => console.error('Error:', error));
    };

    $scope.deleteUser = function(id) {
        var url = '/user/'+id;

        fetch(url, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => window.location.reload())
            .catch(error => console.error('Error:', error));
    };

    $scope.deleteCato = function(id) {
        var url = '/category/'+id;

        fetch(url, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => window.location.reload())
            .catch(error => console.error('Error:', error));
    };

    $scope.addCato = function() {
        document.querySelector('#catoModal').style.display = "block";
    };

    $scope.add = function() {
        var url = '/category/create';
        var data = {name: document.querySelector('#nameCato').value};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => addTrue())
            .catch(error => addFalse());
    };

    function addTrue() {
        document.querySelector('.errorCato').style.display = "none";
        document.querySelector('#catoModal').style.display = "none";
        window.location.reload();
    }
    function addFalse() {
        document.querySelector('.errorCato').innerHTML = "Something went wrong. Please try it later again!";
        document.querySelector('.errorCato').style.display = "block";
    }
});