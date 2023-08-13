import { createElement } from '../../render.js';

function createFormEventTemplate () {
  return '<form class="event event--edit" action="#" method="post"></form>';
}

export default class FormEventView {
  getTemplate () {
    return createFormEventTemplate();
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
