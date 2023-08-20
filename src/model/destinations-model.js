import { destinations } from '../mock/mock-data.js';

export default class DestinationsModel {
  destinations = destinations;

  getDestinations() {
    return this.destinations;
  }
}
