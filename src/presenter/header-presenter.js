import { render } from '../render.js';
import FormFilterView from '../view/filter-form/filter-form-view.js';
import FilterItemView from '../view/filter-form/filter-item-view.js';

const FilterType = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past',
};

const tripFiltersContainerElement = document.querySelector('.trip-controls__filters');

export default class HeaderPresenter {
  formFilter = new FormFilterView();
  init () {
    render(this.formFilter, tripFiltersContainerElement);
    Object.values(FilterType).forEach((value) => render(new FilterItemView(value), this.formFilter.getElement()));
  }
}

