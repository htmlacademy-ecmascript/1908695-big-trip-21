import { createElement } from '../../render.js';

function createFilterItemTemplate (sortValue) {
  return `<div class="trip-sort__item  trip-sort__item--day">
  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
  <label class="trip-sort__btn" for="sort-day">${sortValue}</label>
  </div>`;
}

export default class SortItemView {
  constructor (value) {
    this.value = value;
  }

  getTemplate () {
    return createFilterItemTemplate(this.value);
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
