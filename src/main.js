import HeaderPresenter from './presenter/header-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';

const headerPresenter = new HeaderPresenter();
const sortPresenter = new SortPresenter();
const tripEventsPresenter = new TripEventsPresenter();
headerPresenter.init();
sortPresenter.init();
tripEventsPresenter.init();
