import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { ContactComponent } from './contact.component'
import './contact.scss'

export const ContactModule = angular
  .module('contact', [
    uiRouter
  ])
  .component('contact', ContactComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'
    $stateProvider
      .state('contact', {
        url: '/contact-us',
        component: 'contact',
        resolve: {
          contactData: () => ({})
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name