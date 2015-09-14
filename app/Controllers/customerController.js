function CustomerController($scope){
    $scope.customers=[
    {CustomerId:1, CustomerName:'Sijia', City:'Edison', State:'NJ'},
    {CustomerId:2, CustomerName:'Tommy', City:'NYC', State:'NY'}
    ]
}
myApp.controller('CustomerController', CustomerController);