import template from './cruises.html'

export const CruisesComponent = {
  bindings: {
    itineraries: '<'
  },
  template,
  controller: class CruisesComponent {
    constructor() {
      'ngInject'
    }
    $onInit() {}
    $onChanges(changes) {
      if (changes.itineraries) {
        this.itineraries = {...this.itineraries}
      }
    }
  }
}
