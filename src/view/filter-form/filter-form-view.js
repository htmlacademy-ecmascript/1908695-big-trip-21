import { createElement } from '../../render.js';

function createFilterFormTemplate () {
  return `<form class="trip-filters" action="#" method="get">
  <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
}

export default class FormFilterView {
  getTemplate () {
    return createFilterFormTemplate();
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
