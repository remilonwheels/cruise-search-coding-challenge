import angular from 'angular'
import { AppHeaderModule } from './app-header/app-header.module'

export const CommonModule = angular
  .module('app.common', [
    AppHeaderModule
  ])
  .name
