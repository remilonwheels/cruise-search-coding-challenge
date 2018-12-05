import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { CruiseComponent } from './cruise.component'
import './cruise.scss'

export const CruiseModule = angular
  .module('cruise', [
    uiRouter
  ])
  .component('cruise', CruiseComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'
    $stateProvider
      .state('cruise', {
        url: '/cruise/{cruiseId}',
        component: 'cruise',
        params: {
          cruise: {value: {}},
          bookRoom: {value: {}}
        },
        resolve: {
          cruise: $stateParams => ({...$stateParams.cruise}),
          bookRoom: $stateParams => ({...$stateParams.bookRoom})
        } 
      })
    $urlRouterProvider.otherwise('/')
  })
  .name