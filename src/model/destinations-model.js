import { DEFAULT_DESTINATION_ID } from '../mock/const.js';

export default class DestinationsModel {
  constructor(service) {
    this.service = service;
    this.destinations = this.service.getDestinations();
  }

  getDestinations() {
    return this.destinations;
  }

  getById(id = DEFAULT_DESTINATION_ID) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
