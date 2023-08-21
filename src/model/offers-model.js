import {DEFAULT_TYPE} from '../mock/const.js';

export default class OffersModel {
  constructor(service) {
    this.service = service;
    this.offers = this.service.getOffers();
  }

  getOffers() {
    return this.offers;
  }

  getByType(type = DEFAULT_TYPE) {
    return this.offers.find((offer) => offer.type === type).offers;
  }
}
