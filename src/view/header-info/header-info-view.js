import { createElement } from '../../render.js';

function createHeaderInfoTemplate(title, startDate, endDate, cost) {
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${title}</h1>

    <p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${endDate}</p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>
</section>`;
}

export default class HeaderInfoView {
  constructor(title, startDate, endDate, cost) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.cost = cost;
  }

  getTemplate () {
    return createHeaderInfoTemplate(this.title, this.startDate, this.endDate, this.cost);
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
