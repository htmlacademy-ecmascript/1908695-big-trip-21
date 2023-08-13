import { createElement } from '../../render.js';

function createSortFormTemplate () {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
         </form>`;
}

export default class FormSortView {
  getTemplate () {
    return createSortFormTemplate();
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
