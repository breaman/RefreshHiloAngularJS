(function () {
    angular.module('myApp', ['ngRoute', 'ngMessages']);

    angular.module('myApp').config(MyConfig);

    angular.module('myApp').controller('myController', MyController);
    angular.module('myApp').controller('newItemController', NewItemController);

    function MyConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'wishlist.html',
            controller: 'myController',
            controllerAs: 'ctrl'
        })
        .when('/new', {
            templateUrl: 'newItem.html',
            controller: 'newItemController',
            controllerAs: 'newCtrl'
        })
        .otherwise('/');
    }

    function MyController($http) {
        var vm = this;
        vm.sortBy = 'name';
        vm.reverse = false;
        vm.currentPerson = {};

        $http.get('/data/people').success(function (data) {
            vm.people = data;
        }).error(function () {
            alert('Something went horribly wrong.');
        });

        vm.setCurrentUser = function (person) {
            vm.currentPerson = person;
        }

        vm.sort = function (columnName) {
            vm.sortBy = columnName;
            vm.reverse = !vm.reverse;
        }
    }

    function NewItemController() {
        var vm = this;
        vm.gift = {};
        vm.gift.enteredOn = new Date();

        vm.saveItem = function (isValid) {
            if (isValid) {
                alert('submitting: ' + JSON.stringify(vm.gift));
            }
            else {
                alert('I was clicked and am invalid');
            }
        }
    }
})();