angular.module('caranddriver', [  'ui.select', 'ui.router'])

.config(function($stateProvider) {
  $stateProvider

    .state('home', {
      url: '',
      component: 'carPicker',
      views: {
        header: 'navigation',
        body: 'carPicker'
      }
    })

    .state('car-details', {
      url: ':make/:model',
      component: 'carPicker',
      views: {
        header: 'navigation',
        body: 'carInfo'
      }
    })


  });