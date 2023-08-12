import { createElement } from '../../render.js';

const Offer = {
  luggage : {
    type: 'luggage',
    title: 'Add luggage',
    price: 50,
  },
  comfort: {
    type: 'comfort',
    title: 'Switch to comfort',
    price: 80,
  },
  meal: {
    type: 'meal',
    title: 'Add meal',
    price: 15,
  },
  seats: {
    type: 'seats',
    title: 'Choose seats',
    price: 5,
  },
  train: {
    type: 'train',
    title: 'Travel by train',
    price: 40,
  },
};

function createOfferSelectorTemplate(type, title, price) {
  return `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}">
  <label class="event__offer-label" for="event-offer-${type}-1">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </label>
</div>`;
}

function createOfferSelectorsHtml () {
  const selectors = [];
  Object.values(Offer).forEach(({type, title, price}) =>{
    const selector = createOfferSelectorTemplate(type, title,price);
    selectors.push(selector);
  });
  return selectors.join('');
}

function createFormEventSectionOfferTemplate (title) {
  return `<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">${title}</h3>

  <div class="event__available-offers">
   ${createOfferSelectorsHtml()}
  </div>
</section>`;
}

export default class FormSectionOfferView {
  constructor(title) {
    this.title = title;
  }

  getTemplate () {
    return createFormEventSectionOfferTemplate(this.title);
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
