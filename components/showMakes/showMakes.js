angular.module('caranddriver')
.component('showMakes', {
  templateUrl: 'components/showMakes/showMakes.html',
  bindings: {
    make: '='
  },
  controller: "MakePickerCtrl"
})

.controller('MakePickerCtrl', function() {
  this.makes = [
    {
      'key': 'Buick',
      'value': 'Buick'
    },
    {
      'key': 'Chevrolet',
      'value': 'Chevrolet'
    },
    {
      'key': 'Ford',
      'value': 'Ford'
    },
    {
      'key': 'Kia',
      'value': 'Kia'
    },
    {
      'key': 'Mazda',
      'value': 'Mazda'
    },
    {
      'key': 'Nissan',
      'value': 'Nissan'
    }
  ];
});
