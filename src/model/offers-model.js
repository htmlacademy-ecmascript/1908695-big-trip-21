import { offers } from '../mock/mock-data.js';

export default class OffersModel {
  offers = offers;

  getOffers() {
    return this.offers;
  }
}
