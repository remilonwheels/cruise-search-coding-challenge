import template from './cruise-tile.html'
import mapImage from '../../../../assets/itinerary-map.jpeg'

const flattenItinerary = ({
  itineraryId,
  currencySymbol,
  dateDepart: departureDate,
  itinerary: {
    description
  },
  ship: {
    displayName: shipName
  },
  embarkPort: {
    portName: embarkPortName
  },
  disembarkPort: {
    portName: disembarkPortName
  },
  stateRooms,
  portsOfCall
}) => {
  const flatStateRooms = stateRooms.map(({
    _id: idName,
    displayOrder,
    display: shouldDisplay,
    priceBlocks: [{
      govtFeesAndTaxes,
      prices: [
        {fare}
      ]
    }]
  }) => ({
    idName,
    displayOrder,
    shouldDisplay, 
    govtFeesAndTaxes,
    fare
  }))

  return {
    itineraryId,
    currencySymbol,
    departureDate,
    description,
    disembarkPortName,
    embarkPortName,
    shipName,
    stateRooms: flatStateRooms,
    portsOfCall
  }
}

const CruiseTileComponent = {
  bindings: {
    itinerary: '<'
  },
  template,
  controller: class CruiseTileComponent {
    constructor($state) {
      'ngInject'
      this.$state = $state
    }
    $onInit() {
      this.selectedStateRoom = this.itinerary.stateRooms[0]
      this.mapImage = mapImage
    }
    $onChanges(changes) {
      if (changes.itinerary) {
        this.itinerary = flattenItinerary({...this.itinerary})
      }
    }
    handleViewItineraryClick() {
      this.$state.go('cruise', {
        cruise: this.itinerary,
        cruiseId: this.itinerary.itineraryId
      })
    }
  }
}

export default CruiseTileComponent
