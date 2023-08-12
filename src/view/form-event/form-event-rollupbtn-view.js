import { createElement } from '../../render.js';

function createFormEventRollupBtnTemplate () {
  return `<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
  </button>`;
}

export default class FormEventRollupBtnView {
  getTemplate () {
    return createFormEventRollupBtnTemplate();
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
