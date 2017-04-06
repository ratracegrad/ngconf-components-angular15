angular.module('caranddriver')
.component('carInfo', {
  templateUrl: 'components/carInfo/carInfo.html',
  controller: 'CarInfoCtrl'
})

.controller('CarInfoCtrl', function($stateParams, $http) {
  var vm = this;
  vm.car = {
    make: $stateParams.make,
    model: $stateParams.model
  };


  $http.get('components/carInfo/cars.json').then(function(response) {

    var car = response.data[$stateParams.make];
    if (!car || !car[$stateParams.model]) {
      return alert("no data for the selected car")
    }

    car =  car[$stateParams.model];
    vm.car.image = car.image;
    vm.car.info = car.info;
  }, function(err) {console.log(err) })

});