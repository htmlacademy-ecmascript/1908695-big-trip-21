import { render, RenderPosition } from '../render.js';
import FormFilterView from '../view/filter-form/filter-form-view.js';
import FilterItemView from '../view/filter-form/filter-item-view.js';
import HeaderInfoView from '../view/header-info/header-info-view.js';

const FilterType = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past',
};
const tripMainElement = document.querySelector('.trip-main');
const tripFiltersContainerElement = document.querySelector('.trip-controls__filters');

export default class HeaderPresenter {
  formFilter = new FormFilterView();
  headerInfoView = new HeaderInfoView('Amsterdam &mdash; Chamonix &mdash; Geneva', 'Mar 18', 20, 1230);
  init () {
    render(this.headerInfoView, tripMainElement, RenderPosition.AFTERBEGIN);
    render(this.formFilter, tripFiltersContainerElement);
    Object.values(FilterType).forEach((value) => render(new FilterItemView(value), this.formFilter.getElement()));
  }
}

