import { createElement } from '../../render.js';

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

function createOfferSelectorsHtml (offers = '') {
  const selectors = [];

  offers.forEach(({type, title, price}) =>{
    const selector = createOfferSelectorTemplate(type, title,price);
    selectors.push(selector);
  });
  return selectors.join('');
}

function createFormEventSectionOfferTemplate (title, offers = '') {
  return `<section class="event__section  event__section--offers ${offers.length ? '' : 'hidden'}">
  <h3 class="event__section-title  event__section-title--offers">${title}</h3>

  <div class="event__available-offers">
   ${createOfferSelectorsHtml(offers)}
  </div>
</section>`;
}

export default class FormSectionOfferView {
  constructor(title, offerList) {
    this.title = title;
    this.offerList = offerList;
  }

  getTemplate () {
    return createFormEventSectionOfferTemplate(this.title, this.offerList);
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
