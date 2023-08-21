import { createElement } from '../../render.js';

function createFormEventSectionDestinationTemplate (title, description) {
  return `   <section class="event__section  event__section--destination ${description ? '' : 'hidden'}">
  <h3 class="event__section-title  event__section-title--destination">${title}</h3>
  <p class="event__destination-description ">${description}</p>
</section>
</section>`;
}

export default class FormSectionDestinationView {
  constructor(title, destinationId) {
    this.title = title;
    this.destinationId = destinationId;
  }

  getTemplate () {
    return createFormEventSectionDestinationTemplate (this.title, this.destinationId);
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

