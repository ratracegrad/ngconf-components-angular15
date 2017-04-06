angular.module('caranddriver')
.component('carPicker', {
  templateUrl: 'components/carPicker/carPicker.html',
  controller: 'CarPickerCtrl'
})

.controller('CarPickerCtrl', function($state) {
  this.selectedMake = null;
  this.selectedModel = null;

  this.goToInfo = function() {
    console.log('goToInfo')
    let make = this.selectedMake.value.toLowerCase();
    let model = this.selectedModel.value.toLowerCase()
    $state.go('car-details', {make: make, model: model})
  }
});