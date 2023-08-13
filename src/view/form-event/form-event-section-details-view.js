import { createElement } from '../../render.js';

function createFormEventSectionTemplate () {
  return '<section class="event__details"></section>';
}

export default class FormSectionDetailsView{
  getTemplate () {
    return createFormEventSectionTemplate ();
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
