angular.module('caranddriver')
.component('showModels', {
  templateUrl: 'components/showModels/showModels.html',
  bindings: {
    make: '<',
    model: '='
  },
  controller: "ModelPickerCtrl"
})

.controller('ModelPickerCtrl', function() {
  this.models = {
    'Buick': {
      models: [
        {
          'key': 'Enclave',
          'value': 'Enclave'
        },
        {
          'key': 'Encore',
          'value': 'Encore'
        },
        {
          'key': 'Envision',
          'value': 'Envision'
        }
      ],
      images: []
    },
    'Chevrolet': {
      models: [
        {
          'key': 'Camero',
          'value': 'Camero'
        },
        {
          'key': 'Colorado',
          'value': 'Colorado'
        },
        {
          'key': 'Corvette',
          'value': 'Corvette'
        }
      ],
      images: []
    },
    'Ford': {
      models: [
        {
          'key': 'Edge',
          'value': 'Edge'
        },
        {
          'key': 'Escape',
          'value': 'Escape'
        },
        {
          'key': 'Explorer',
          'value': 'Explorer'
        }
      ],
      images: []
    },
    'Kia': {
      models: [
        {
          'key': 'Forte',
          'value': 'Forte'
        },
        {
          'key': 'Optima',
          'value': 'Optima'
        },
        {
          'key': 'Sedona',
          'value': 'Sedona'
        }
      ],
      images: []
    },
    'Mazda': {
      models: [
        {
          'key': 'CX-3',
          'value': 'CX-3'
        },
        {
          'key': 'Mazda 3',
          'value': 'Mazda 3'
        },
        {
          'key': 'MX-5 Miata',
          'value': 'MX-5 Miata'
        }
      ],
      images: []
    },
    'Nissan': {
      models: [
        {
          'key': 'Altima',
          'value': 'Altima'
        },
        {
          'key': 'Maxima',
          'value': 'Maxima'
        },
        {
          'key': 'Pathfinder',
          'value': 'Pathfinder'
        }
      ],
      images: []
    }
  };
});