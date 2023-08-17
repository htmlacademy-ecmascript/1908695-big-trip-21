import HeaderPresenter from './presenter/header-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import PointsModel from './model/points-model.js';
const points = new PointsModel;

import './mock/mock-data.js';
const headerPresenter = new HeaderPresenter();
const sortPresenter = new SortPresenter();
const tripEventsPresenter = new TripEventsPresenter(points);
headerPresenter.init();
sortPresenter.init();
tripEventsPresenter.init();
