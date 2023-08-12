import { createElement } from '../../render.js';

function createFormEventSectionDestinationTemplate (title) {
  return `   <section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">${title}</h3>
  <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>
</section>
</section>`;
}

export default class FormSectionDestinationView {
  constructor(title) {
    this.title = title;
  }

  getTemplate () {
    return createFormEventSectionDestinationTemplate (this.title);
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
