import { createElement } from '../../render.js';

const DEFAULT_DESTINATION = 'Monaco';

function getDestination (destinations) {
  return destinations.find((city) => city.name === DEFAULT_DESTINATION);
}

function createFormEventSectionDestinationTemplate (title, description) {
  return `   <section class="event__section  event__section--destination ${description ? '' : 'hidden'}">
  <h3 class="event__section-title  event__section-title--destination">${title}</h3>
  <p class="event__destination-description ">${description}</p>
</section>
</section>`;
}

export default class FormSectionDestinationView {
  constructor(title, destination) {
    this.title = title;
    this.destination = destination;
  }

  getTemplate () {
    return createFormEventSectionDestinationTemplate (this.title, getDestination(this.destination)?.description);
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

export { getDestination };

