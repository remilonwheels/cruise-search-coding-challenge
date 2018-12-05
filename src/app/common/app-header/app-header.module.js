import angular from 'angular'
import { AppHeaderComponent } from './app-header.component'
import './app-header.scss'

export const AppHeaderModule = angular
  .module('appHeader', [])
  .component('appHeader', AppHeaderComponent)
  .name