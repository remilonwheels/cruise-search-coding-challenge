import angular from 'angular'
import StateRooms from '../state-rooms/state-rooms.module'
import CruiseTileComponent from './cruise-tile.component'
import './cruise-tile.scss'

const CruiseTileModule = angular
  .module('cruises.cruiseTile', [StateRooms])
  .component('cruiseTile', CruiseTileComponent)
  .name

export default CruiseTileModule