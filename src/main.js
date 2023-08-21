import HeaderPresenter from './presenter/header-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import MockService from './service/mock-service.js';

const mockService = new MockService();

const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);

const headerPresenter = new HeaderPresenter();
const sortPresenter = new SortPresenter();
const tripEventsPresenter = new TripEventsPresenter(pointsModel, destinationsModel, offersModel);

headerPresenter.init();
sortPresenter.init();
tripEventsPresenter.init();

