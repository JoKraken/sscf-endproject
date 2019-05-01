app.controller('registerCtrl', function($scope) {
    $scope.register = function() {
        var url = '/user/create';
        var data = {name: document.querySelector('#nameReg').value,
                    pwd: document.querySelector('#pwdReg').value};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then((response) => {
            if(response != "404"){
                localStorage.setItem("login", true);
                localStorage.setItem("temp", response);
                localStorage.setItem("name", data.name);
                document.querySelector('#logedIn').style.display = "block";
                document.querySelector('.errorLogin').style.display = "none";
                document.querySelector('.errorRegister').style.display = "none";
                document.querySelector('#loginForm').style.display = "none";
                document.querySelector('#registerModal').style.display = "none";
                window.location.reload();
            }else{
                localStorage.setItem("login", false);
                localStorage.setItem("temp", undefined);
                localStorage.setItem("name", undefined);
                document.querySelector('#logedIn').style.display = "none";
                document.querySelector('.errorRegister').innerHTML = "The username already exist! Please choose an other name";
                document.querySelector('.errorRegister').style.display = "block";
            }
        }).catch(() => {
            localStorage.setItem("login", false);
            localStorage.setItem("temp", undefined);
            localStorage.setItem("name", undefined);
            document.querySelector('#logedIn').style.display = "none";
            document.querySelector('.errorRegister').innerHTML = "Something went wrong. Please try it later again!";
            document.querySelector('.errorRegister').style.display = "block";
        });
    };
});
