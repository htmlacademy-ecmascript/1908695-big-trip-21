import { createElement } from '../../render.js';

function createFilterItemTemplate (filterValue) {
  return `<div class="trip-filters__filter">
          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
          <label class="trip-filters__filter-label" for="filter-everything">${filterValue}</label>
          </div>`;
}

export default class FilterItemView {
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
