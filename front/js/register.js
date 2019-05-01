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
            console.log("register");
            localStorage.setItem("login", true);
            localStorage.setItem("temp", response);
            document.querySelector('#logedIn').style.display = "block";
            document.querySelector('.errorLogin').style.display = "none";
            document.querySelector('.errorRegister').style.display = "none";
            document.querySelector('#loginForm').style.display = "none";
            document.querySelector('#registerModal').style.display = "none";
            window.location.reload();
        }).catch(() => {
            localStorage.setItem("login", false);
            localStorage.setItem("temp", undefined);
            console.log("not register");
            document.querySelector('#logedIn').style.display = "none";
            document.querySelector('.errorRegister').innerHTML = "Something went wrong. Please try it later again!";
            document.querySelector('.errorRegister').style.display = "block";
        });
    };
});
