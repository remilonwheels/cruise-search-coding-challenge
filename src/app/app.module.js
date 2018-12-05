import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { AppComponent } from './app.component'
import { ComponentsModule } from './components/components.module'
import { CommonModule } from './common/common.module'
import './app.scss'

export const AppModule = angular
  .module('app', [
    ComponentsModule,
    CommonModule,
    uiRouter
  ])
  .component('app', AppComponent)
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider
      .state('root', {
        url: '/',
        redirectTo: 'cruises'
      })
  })
  .name
