app.controller('registerCtrl', function($scope) {
    $scope.register = function() {
        console.log("register");

        const Http = new XMLHttpRequest();
        const url='/createUser';
        Http.open("POST", url, true);
        Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        Http.send("name="+document.querySelector('#nameReg').value+
                        "&pwd="+document.querySelector('#pwdReg').value);
        Http.onreadystatechange= (e)=>{
            //console.log(Http);
            if(Http.status == 200){
                console.log("register");
                localStorage.setItem("login", true);
                localStorage.setItem("temp", Http.response);
                document.querySelector('#logedIn').style.display = "block";
                document.querySelector('.errorLogin').style.display = "none";
                document.querySelector('.errorRegister').style.display = "none";
                document.querySelector('#loginForm').style.display = "none";
                document.querySelector('#registerModal').style.display = "none";
                window.location.reload();
            } else{
                localStorage.setItem("login", false);
                localStorage.setItem("temp", undefined);
                console.log("not register");
                document.querySelector('#logedIn').style.display = "none";
                document.querySelector('.errorRegister').innerHTML = "Something went wrong. Please try it later again!";
                document.querySelector('.errorRegister').style.display = "block";
            }
        };
    };
});
