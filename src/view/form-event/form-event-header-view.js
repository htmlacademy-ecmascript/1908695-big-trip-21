import { createElement } from '../../render.js';

const EventType = {
  taxi:  'taxi',
  bus: 'bus',
  train: 'train',
  ship: 'ship',
  drive: 'drive',
  flight: 'flight',
  'check-in': 'check-in',
  sightseeing: 'sightseeing',
  restaurant: 'restaurant',
};

function createEventTypeSelectorTemplate (type) {
  return `<div class="event__type-item">
  <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
  <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type[0].toUpperCase() + type.slice(1)}</label>
</div>`;
}

function createEventSelectorsHtml () {
  const selectors = [];
  Object.values(EventType).forEach((type) =>{
    const selector = createEventTypeSelectorTemplate(type);
    selectors.push(selector);
  });
  return selectors.join('');
}

function createFormEventTypeTemplate () {
  return `<div class="event__type-wrapper">
  <label class="event__type  event__type-btn" for="event-type-toggle-1">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
  </label>
  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${createEventSelectorsHtml()}
    </fieldset>
  </div>
</div>`;
}

function createFormEventDestinationTemplate () {
  return `<div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-1">
    Flight
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
  <datalist id="destination-list-1">
    <option value="Amsterdam"></option>
    <option value="Geneva"></option>
    <option value="Chamonix"></option>
  </datalist>
</div>`;
}

function createFormEventTimeTemplate () {
  return `<div class="event__field-group  event__field-group--time">
  <label class="visually-hidden" for="event-start-time-1">From</label>
  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
  &mdash;
  <label class="visually-hidden" for="event-end-time-1">To</label>
  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
</div>`;
}

function createFormEventPriceTemplate () {
  return `<div class="event__field-group  event__field-group--price">
  <label class="event__label" for="event-price-1">
    <span class="visually-hidden">Price</span>
    &euro;
  </label>
  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
</div>`;
}

function createFormEventSubmitBtnTemplate () {
  return '<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>';
}

function createFormEventCancelBtnTemplate (buttonName) {
  return `<button class="event__reset-btn" type="reset">${buttonName}</button>`;
}

function createFormEventHeaderTemplate (buttonName) {
  return `<header class="event__header">
  ${createFormEventTypeTemplate()}
  ${createFormEventDestinationTemplate()}
  ${createFormEventTimeTemplate()}
  ${createFormEventPriceTemplate()}
  ${createFormEventSubmitBtnTemplate()}
  ${createFormEventCancelBtnTemplate(buttonName)}
  </header>`;
}

export default class FormEventHeaderView {
  constructor(buttonName) {
    this.buttonName = buttonName;
  }

  getTemplate () {
    return createFormEventHeaderTemplate(this.buttonName);
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