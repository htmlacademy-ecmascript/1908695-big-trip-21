import { render, RenderPosition } from '../render.js';
import FormSortView from '../view/sort-form/sort-form-view.js';
import SortItemView from '../view/sort-form/sort-item-view.js';

const SortType = {
  DAY: 'Day',
  EVENT: 'Event',
  TIME: 'Time',
  PRICE: 'Price',
  OFFERS: 'Offers',
};

const tripSortContainerElement = document.querySelector('.trip-events');

export default class SortPresenter {
  formSort = new FormSortView();
  init () {
    render(this.formSort, tripSortContainerElement, RenderPosition.AFTERBEGIN);
    Object.values(SortType).forEach((value) => render(new SortItemView(value), this.formSort.getElement()));
  }
}
