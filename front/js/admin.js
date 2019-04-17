app.controller('adminCtrl', function($scope) {
    if(localStorage.login == "false"){
        $scope.isAdmin = false;
    }else if(localStorage.login == "true"){
        document.querySelector('.tab-content').style.display = "none";
        $scope.users = [];
        $scope.categories = [];

        fetch('/isAdmin/'+localStorage.temp, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(() => {
            console.log("isAdmin");
            $scope.isAdmin = true;

            fetch('/user', {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => res.json())
            .then((response) => {
                console.log("getUser");
                console.log(response);
                if (response != "") {
                    $scope.users = response;
                }

                /*fetch('/category', {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => res.json())
                .then(() => {
                    if (response != "") {
                        $scope.categories = response;
                    }*/
                    document.querySelector('.tab-content').style.display = "block";
                    $scope.$apply();
                //}).catch(error => console.error('Error:', error));
            }).catch(error => console.error('Error:', error));
        }).catch(() => {
            $scope.isAdmin = false;
            document.querySelector('.tab-content').style.display = "block";
        });

    }

    $scope.changeStatus = function(id, status) {
        var url = '/changeAdminStatus';
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
        var url = '/createCategory';
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