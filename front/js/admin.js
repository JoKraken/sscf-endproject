app.controller('adminCtrl', function($scope) {
    if(localStorage.login == "false"){
        $scope.isAdmin = false;
    }else {
        $scope.isAdmin = true;
        //document.querySelector('.tab-content').style.display = "none";
        $scope.users = [];
        $scope.categories = [];


    }

    
});