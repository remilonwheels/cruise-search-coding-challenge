import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { CruisesComponent } from './cruises.component'
import { CruiseService } from './cruise.service'
import CruiseTile from './cruise-tile/cruise-tile.module'
import './cruises.scss'

export const CruisesModule = angular
  .module('cruises', [
    uiRouter,
    CruiseTile
  ])
  .component('cruises', CruisesComponent)
  .service('CruiseService', CruiseService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'
    $stateProvider
      .state('cruises', {
        url: '/cruises',
        component: 'cruises',
        resolve: {
          itineraries: CruiseService => CruiseService.getCruises()
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name