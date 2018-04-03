project1.controller('Controller1', function ($scope, $rootScope) {
    $scope.sayHello = "hello";
    $rootScope.sayHello = "hello-root";
});

project1.controller('Controller2', function ($scope) {
    $scope.sayHello = "hello";
});

project1.controller('Controller3', function ($scope) {
    $scope.tinhtoan = function() {
        var st1 = $scope.so1;
        var st2 = $scope.so2;
        var pt = $scope.pheptoan;
        if (pt == '+') {
            $scope.ketqua = st1 + st2;
        } else if (pt == '-') {
            $scope.ketqua = st1 - st2;
        } else if (pt == '*') {
            $scope.ketqua = st1 * st2;
        } else if (pt == '/') {
            $scope.ketqua = st1 / st2;
        } else {
            $scope.ketqua = '';
        }
    }
});

project1.controller('Controller4', function ($scope) {
    $scope.sayHello = "hello-child-4";
    $scope.onClick = function() {
        $scope.sayHello = "beautiful!!!";
    };
});

project1.controller('Controller5', function ($scope) {

});