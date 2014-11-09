angular.module('myApp', []);

angular.module('myApp').controller('myController', MyController);

MyController.$inject = ['$scope'];

function MyController($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.currentPerson = {};
    $scope.people = [
        { name: 'Inigo Montoya', gifts: [{ name: 'My Father', description: 'I just want my father back', price: 'priceless', enteredOn: '2014-11-05' }, { name: 'Six Fingered Man', description: 'He killed my father, he should prepare to die', price: '5000', enteredOn: '2014-11-06' }] },
        { name: 'Princess Buttercup', gifts: [{ name: 'Rodent of Unusual Size', description: 'These are really cool', price: '300', enteredOn: '2014-10-30' }] },
        { name: 'Fezzik', gifts: [{ name: 'Dr. Seuss Books', description: 'Best rhyming books around. Get these please.', price: '20', enteredOn: '2013-11-05' }, { name: 'Big rocks', description: 'They are a lot of fun to throw', price: '2', enteredOn: '2014-09-05' }] },
        { name: 'Westley', gifts: [{ name: '50 years of memories', description: 'I lost these somewhere along the way, would love to get them back', price: '50000', enteredOn: 'N/A' }, { name: 'Miracle Pill', description: 'It tastes good in chocolate', price: '65', enteredOn: '2014-08-06' }, { name: 'Brute Squad', description: 'Need it so we can storm the castle', price: '200', enteredOn: '2014-08-07' }] }
    ];

    $scope.setCurrentUser = function (person) {
        $scope.currentPerson = person;
    }

    $scope.sort = function (columnName) {
        $scope.sortBy = columnName;
        $scope.reverse = !$scope.reverse;
    }
}