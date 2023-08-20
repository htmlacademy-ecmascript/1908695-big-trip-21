import HeaderPresenter from './presenter/header-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';

const points = new PointsModel;
const offers = new OffersModel;
const destinations = new DestinationsModel;

import './mock/mock-data.js';
const headerPresenter = new HeaderPresenter();
const sortPresenter = new SortPresenter();
const tripEventsPresenter = new TripEventsPresenter(points, destinations, offers);
headerPresenter.init();
sortPresenter.init();
tripEventsPresenter.init();
