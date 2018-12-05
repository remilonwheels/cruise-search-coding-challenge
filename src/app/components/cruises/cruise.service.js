import mockResponse from './mock-api-response'

const helpers = {
  parseCruiseResponse: (response) => {
    return response
    .data[0]
    .attributes
    .itineraries
    .map(({itineraryId, voyages}) => ({...voyages[0], itineraryId}))
  }
}

export class CruiseService {
  constructor($http) {
    'ngInject'
    this.$http = $http
  }

  getCruises() {
    // return Promise.resolve(
    //   helpers.parseCruiseResponse(mockResponse)
    // )

    const url = 'https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0'

    return this.$http({
      url,
      method: 'GET',
      withCredentials: true,
      headers: {'Content-Type': 'application/json charset=utf-8'}
    })
    .then(response => helpers.parseCruiseResponse(response.data))
  }
}
