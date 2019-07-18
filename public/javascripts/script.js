var app = angular.module('JBL', []);
var cart = document.querySelector('.count-cart');
var cartt = document.querySelector('.count-cart-t');
var Submit = document.querySelector('#Submit');
app.controller('formCtrl', function($scope) {
    $scope.count = 0;
    $scope.master = {count: 0};
  $scope.add = function() {
    $scope.master.count = parseInt($scope.count);
    $scope.master.count = $scope.master.count+1;
    $scope.count = $scope.master.count;
  };
  $scope.minus = function() {
      if($scope.master.count>0){
        $scope.master.count = parseInt($scope.count);
        $scope.master.count = $scope.master.count-1;
        $scope.count = $scope.master.count;
      }
      else{
          $scope.master.count = 0;
      }
  };
  Submit.addEventListener('click',function(){
    Submit.textContent = 'Added to Cart';
    cart.textContent = $scope.count;
    cartt.textContent = $scope.count;
    setInterval(function(){
      Submit.textContent = 'Add To Cart'
    },1100);
  });
});

var toggle = document.querySelector('.navbar-toggler');
var toggled = document.querySelector('.toggled');

toggle.addEventListener('click',function(){
  toggled.classList.toggle('tgld');
})