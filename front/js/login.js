app.controller('loginCtrl', function($scope) {
    if (localStorage.login == "true") {
        document.querySelector('.errorLogin').style.display = "none";
        document.querySelector('#loginForm').style.display = "none";
        $scope.name = localStorage.name;
    } else if(localStorage.login == "false" || localStorage.login == undefined){
        document.querySelector('#logedIn').style.display = "none";
    }

    $scope.login = function() {
        var url = '/login';
        console.log("name: "+document.querySelector('#name').value);
        var data = {name: document.querySelector('#name').value,
            pwd: document.querySelector('#pwd').value};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((response) => {
            if (response != "404" && response != "401") {
                localStorage.setItem("login", true);
                localStorage.setItem("temp", response.id);
                localStorage.setItem("name", response.name);
                document.querySelector('#logedIn').style.display = "block";
                document.querySelector('.errorLogin').style.display = "none";
                document.querySelector('#loginForm').style.display = "none";
                window.location.reload();
            } else {
                localStorage.setItem("login", false);
                localStorage.setItem("temp", undefined);
                document.querySelector('#logedIn').style.display = "none";
                document.querySelector('.errorLogin').innerHTML = (response == "404") ? "The password is wrong" : "The username is wrong";
                document.querySelector('.errorLogin').style.display = "block";
            }
        }).catch(error => console.error('Error:', error));
    };

    $scope.logout = function() {
        localStorage.setItem("login", false);
        localStorage.setItem("temp", undefined);
        document.querySelector('#logedIn').style.display = "none";
        document.querySelector('.errorLogin').style.display = "none";
        document.querySelector('#loginForm').style.display = "block";
        //window.location.reload();
        window.location.href = "/";
    };

    $scope.register = function() {
        document.querySelector('#registerModal').style.display = "block";
    };

});