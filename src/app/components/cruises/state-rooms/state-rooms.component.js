import template from './state-rooms.html'

const StateRoomsComponent = {
  bindings: {
    itinerary: '<',
    stateRooms: '<',
    currencySymbol: '<'
  },
  template,
  controller: class StateRoomsComponent {
    constructor($state) {
      'ngInject'
      this.$state = $state
    }
    $onInit() {
      this.selectedStateRoom = this.stateRooms[0]
    }
    $onChanges(changes) {
      if (changes.itinerary) {
        this.itinerary = {...this.itinerary}
      }
      if (changes.stateRooms) {
        this.stateRooms = [...this.stateRooms]
      }
      if (changes.currencySymbol) {
        this.currencySymbol = this.currencySymbol
      }
    }
    selectRoom(idName) {
      this.selectedStateRoom = this.stateRooms.find(room => room.idName === idName)
    }
    handleBookRoomClick() {
      this.$state.go('cruise', {
        cruise: this.itinerary,
        cruiseId: this.itinerary.itineraryId,
        bookRoom: this.selectedStateRoom
      })
    }
  }
}

export default StateRoomsComponent