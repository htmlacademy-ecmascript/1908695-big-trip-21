import { getRandomArrayElement, getRandomPositiveInteger } from '../utils/utils.js';

const Destination = {
  AMOUNT: 10,
  DESCRIPTION: ['a true asian pearl', 'a perfect place to stay with a family', 'a beautiful old town', '', 'full of of cozy canteens where you can try the best coffee in the Middle East', 'for those who value comfort and coziness', 'middle-eastern paradise', 'famous for its crowded street markets with the best street food in Asia', 'with crowded streets'],
  NAME: ['Monza', 'Piza', 'Rimini', 'Palermo', 'Turin', 'Milan', 'Monaco', 'Barcelona', 'Arezzo', 'Geneva'],
  PICTURES: [
    {
      src: 'https://21.objects.pages.academy/static/destinations/18.jpg',
      description: 'Vien with crowded streets',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/5.jpg',
      description: 'Geneva a true asian pearl',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/20.jpg',
      description: 'Geneva with a beautiful old town',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/16.jpg',
      description: 'Vien a perfect place to stay with a family'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/10.jpg',
      description: 'Vien famous for its crowded street markets with the best street food in Asia'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/11.jpg',
      description: 'Vien full of of cozy canteens where you can try the best coffee in the Middle East'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/13.jpg',
      description: 'Vien with crowded streets'
    }
  ],
  MIN_PICTURES_AMOUNT: 0,
  MAX_PICTURES_AMOUNT: 5,
};

const Offer = {
  TYPE: ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'],
  OFFERS: {
    TITLE: ['Upgrade to a business class', 'Choose the radio station', 'Choose temperature', 'Order meal', 'Wake up at a certain time', 'Add luggage', 'Business lounge', 'Choose the time of check-in', 'Order a meal from the restaurant', 'With air conditioning', 'Choose live music', 'Choose VIP area' ],
    MIN_PRICE: 50,
    MAX_PRICE: 150,
    MIN_OFFERS_AMOUNT: 0,
    MAX_OFFERS_AMOUNT: 5,
  }
};

const Point = {
  AMOUNT: 10,
  MIN_BASE_PRICE: 100,
  MAX_BASE_PRICE: 500,
  IS_FAVORITE: [true, false],
  DATE_YEAR: 2024,
  DATE_START_MONTH: 0,
  DATA_END_MONTH: 11,
  DATE_START_DAY: 1,
  DATE_END_DAY: 31,
  DATE_START_HOUR: 0,
  DATE_END_HOUR: 24,
  DATE_START_MINUTES: 0,
  DATE_END_MINUTES: 60,
};

function getOffer () {
  return Offer.TYPE.map((offer) => ({
    type: offer,
    offers: Array.from({length:getRandomPositiveInteger(Offer.OFFERS.MIN_OFFERS_AMOUNT, Offer.OFFERS.MAX_OFFERS_AMOUNT)}, (_, index) => ({
      title: getRandomArrayElement(Offer.OFFERS.TITLE),
      price: getRandomPositiveInteger(Offer.OFFERS.MIN_PRICE, Offer.OFFERS.MAX_PRICE),
      id: `offer ${index++}`,
    }))
  }));
}

function getDestination (index) {
  return {
    id: `destination ${index}`,
    description: getRandomArrayElement(Destination.DESCRIPTION),
    name: getRandomArrayElement(Destination.NAME),
    pictures: Array.from({length:getRandomPositiveInteger(Destination.MIN_PICTURES_AMOUNT, Destination.MAX_PICTURES_AMOUNT)}, () => getRandomArrayElement(Destination.PICTURES))
  };
}

const destinations = Array.from({length:Destination.AMOUNT}, (_, index) => getDestination(index));

const offers = getOffer() ;

function getPoint (index) {

  const {type, offers: offerItems} = getRandomArrayElement(offers);

  return {
    id: `point ${index}`,

    basePrice: getRandomPositiveInteger(Point.MIN_BASE_PRICE, Point.MAX_BASE_PRICE),

    dateFrom: new Date(Point.DATE_YEAR, getRandomPositiveInteger(Point.DATE_START_MONTH, Point.DATA_END_MONTH), getRandomPositiveInteger(Point.DATE_START_DAY, Point.DATE_END_DAY), getRandomPositiveInteger(Point.DATE_START_HOUR, Point.DATE_END_HOUR), getRandomPositiveInteger(Point.DATE_START_MINUTES, Point.DATE_END_MINUTES)).toISOString(),

    dateTo: new Date(Point.DATE_YEAR, getRandomPositiveInteger(Point.DATE_START_MONTH, Point.DATA_END_MONTH), getRandomPositiveInteger(Point.DATE_START_DAY, Point.DATE_END_DAY), getRandomPositiveInteger(Point.DATE_START_HOUR, Point.DATE_END_HOUR), getRandomPositiveInteger(Point.DATE_START_MINUTES, Point.DATE_END_MINUTES)).toISOString(),

    isFavorite: getRandomArrayElement(Point.IS_FAVORITE),

    type: type,

    offers: [...new Set(Array.from({length:getRandomPositiveInteger(Offer.OFFERS.MIN_OFFERS_AMOUNT, offerItems.length)}, () => getRandomArrayElement(offerItems.map(({id}) => id))))],

    destination: getRandomArrayElement(destinations.map(({id}) => id))
  };
}

const points = Array.from({length:Point.AMOUNT}, (_, index) => getPoint(index));

function getRandomPoint () {
  return getRandomArrayElement(points);
}

export {getRandomPoint, offers, destinations};
