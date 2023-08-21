import { Offer, Destination, Point } from '../mock/mock-data.js';
import { getRandomArrayElement, getRandomPositiveInteger } from '../utils/utils.js';

export default class MockService {
  destinations = [];
  offers = [];
  points = [];
  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getDestinations () {
    return this.destinations;
  }

  getOffers () {
    return this.offers;
  }

  getPoints () {
    return this.points;
  }

  getDestination (index) {
    return {
      id: `destination ${index}`,
      description: getRandomArrayElement(Destination.DESCRIPTION),
      name: getRandomArrayElement(Destination.NAME),
      pictures: Array.from({length:getRandomPositiveInteger(Destination.MIN_PICTURES_AMOUNT, Destination.MAX_PICTURES_AMOUNT)}, () => getRandomArrayElement(Destination.PICTURES))
    };
  }

  getOffer () {
    return Offer.TYPE.map((offer) => ({
      type: offer,
      offers: Array.from({length:getRandomPositiveInteger(Offer.OFFERS.MIN_OFFERS_AMOUNT, Offer.OFFERS.MAX_OFFERS_AMOUNT)}, (_, index) => ({
        title: getRandomArrayElement(Offer.OFFERS.TITLE),
        price: getRandomPositiveInteger(Offer.OFFERS.MIN_PRICE, Offer.OFFERS.MAX_PRICE),
        id: `offer ${index++}`,
      }))
    }));
  }

  getPoint (index) {

    const {type, offers: offerItems} = getRandomArrayElement(this.generateOffers());

    return {
      id: `point ${index}`,

      basePrice: getRandomPositiveInteger(Point.MIN_BASE_PRICE, Point.MAX_BASE_PRICE),

      dateFrom: new Date(Point.DATE_YEAR, getRandomPositiveInteger(Point.DATE_START_MONTH, Point.DATA_END_MONTH), getRandomPositiveInteger(Point.DATE_START_DAY, Point.DATE_END_DAY), getRandomPositiveInteger(Point.DATE_START_HOUR, Point.DATE_END_HOUR), getRandomPositiveInteger(Point.DATE_START_MINUTES, Point.DATE_END_MINUTES)).toISOString(),

      dateTo: new Date(Point.DATE_YEAR, getRandomPositiveInteger(Point.DATE_START_MONTH, Point.DATA_END_MONTH), getRandomPositiveInteger(Point.DATE_START_DAY, Point.DATE_END_DAY), getRandomPositiveInteger(Point.DATE_START_HOUR, Point.DATE_END_HOUR), getRandomPositiveInteger(Point.DATE_START_MINUTES, Point.DATE_END_MINUTES)).toISOString(),

      isFavorite: getRandomArrayElement(Point.IS_FAVORITE),

      type: type,

      offers: [...new Set(Array.from({length:getRandomPositiveInteger(Offer.OFFERS.MIN_OFFERS_AMOUNT, offerItems.length)}, () => getRandomArrayElement(offerItems.map(({id}) => id))))],

      destination: getRandomArrayElement(this.generateDestinations().map(({id}) => id))
    };
  }

  generateDestinations() {
    return Array.from({length:Destination.AMOUNT}, (_, index) => this.getDestination(index));
  }

  generateOffers () {
    return this.getOffer();
  }

  generatePoints () {
    return Array.from({length:Point.AMOUNT}, (_, index) => this.getPoint(index));

  }
}

