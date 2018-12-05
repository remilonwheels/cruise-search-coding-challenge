import template from './cruise.html'

export const CruiseComponent = {
  bindings: {
    cruise: '<',
    bookRoom: '<'
  },
  template,
  controller: class CruiseComponent {
    constructor() {
      'ngInject'
    }
    $onInit() {
    }
    $onChanges(changes) {
      if (changes.cruise) {
        this.cruise = {...this.cruise}
      }
      if (changes.bookRoom) {
        this.bookRoom = {...this.bookRoom}
      }
    }
  }
}
