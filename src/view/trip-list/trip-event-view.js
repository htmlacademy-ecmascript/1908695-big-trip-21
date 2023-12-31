import { createElement } from '../../render.js';
import { formatEventDuration, formatEventDate, formatEventDatetime, formatEventFromToDate} from '../../utils/dayjs.js';
import { POINT_EMPTY } from '../../mock/const.js';

function getOffers (point, offersList) {
  const pointTypeOffer = offersList.find((offer) => offer.type === point.type);
  return pointTypeOffer.offers.filter((offer) => point.offers.includes(offer.id));
}

function createOfferTemplate (offerTitle, offerPrice) {
  return `<li class="event__offer">
  <span class="event__offer-title">${offerTitle}</span>
  &euro;&nbsp;
  <span class="event__offer-price">${offerPrice}</span>
</li>`;
}

function renderChosenOffers (point, offersList) {
  const listItems = [];
  const options = getOffers(point, offersList);
  options.forEach((option) => {
    listItems.push(createOfferTemplate(option.title, option.price));
  });
  return listItems.join('');
}

function createTripEventTemplate (point, offersList, cityName) {
  const { dateFrom, type, dateTo, basePrice, isFavorite } = point;

  return `<div class="event">
    <time class="event__date" datetime="${formatEventDatetime(dateFrom)}">${formatEventDate(dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${cityName}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateFrom.slice(0,16)}">${formatEventFromToDate(dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateTo.slice(0,16)}">${formatEventFromToDate(dateTo)}</time>
      </p>
      <p class="event__duration">${formatEventDuration(dateFrom, dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers ${point.offers.length ? '' : 'hidden'}">
    ${renderChosenOffers(point, offersList)}

    </ul>
    <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''} type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`;
}

export default class TripEventView {
  constructor (point = POINT_EMPTY, offersList, cityName) {
    this.point = point;
    this.offersList = offersList;
    this.cityName = cityName;
  }

  getTemplate () {
    return createTripEventTemplate(this.point, this.offersList, this.cityName);
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
