app.controller('adminCtrl', function($scope) {
    if(localStorage.login == "false"){
        $scope.isAdmin = false;
    }else {
        document.querySelector('.tab-content').style.display = "none";
        $scope.users = [];
        $scope.categories = [];

        const Http = new XMLHttpRequest();
        const url = '/isAdmin/'+localStorage.temp.split('"')[1];
        Http.open("GET", url, true);
        Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.status == 200) $scope.isAdmin = true;
            else $scope.isAdmin = false;

            const Http2 = new XMLHttpRequest();
            const url2 = '/user';
            Http2.open("GET", url2, true);
            Http2.send();
            Http2.onreadystatechange = (e) => {
                if (Http2.status == 200&& Http2.response != "") {
                    $scope.users = JSON.parse(Http2.response);
                }

                const Http3 = new XMLHttpRequest();
                const url3 = '/category';
                Http3.open("GET", url3, true);
                Http3.send();
                Http3.onreadystatechange = (e) => {
                    if (Http3.status == 200&& Http3.response != "") {
                        $scope.categories = JSON.parse(Http3.response);
                    }
                    document.querySelector('.tab-content').style.display = "block";
                    $scope.$apply();
                };
            };
        };
    }

    
});