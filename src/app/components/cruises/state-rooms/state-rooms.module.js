import angular from 'angular'
import StateRoomsComponent from './state-rooms.component'
import './state-rooms.scss'

const StateRoomsModule = angular
  .module('cruises.stateRooms', [])
  .component('stateRooms', StateRoomsComponent)
  .name

export default StateRoomsModule