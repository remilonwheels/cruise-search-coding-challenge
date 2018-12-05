import angular from 'angular'
import { CruisesModule } from './cruises/cruises.module'
import { CruiseModule } from './cruise/cruise.module'
import { ContactModule } from './contact/contact.module'

export const ComponentsModule = angular
  .module('app.components', [
    CruisesModule,
    CruiseModule,
    ContactModule
  ])
  .name
