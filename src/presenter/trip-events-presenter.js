import { render } from '../render.js';
import { createDatePickers } from '../utils/flatpickr.js';
import TripItemView from '../view/trip-list/trip-item.js';
import TripEventsListView from '../view/trip-list/trip-events-list-view.js';
import TripEventView from '../view/trip-list/trip-event-view.js';
import FormEventView from '../view/form-event/form-event-view.js';
import FormEventHeaderView from '../view/form-event/form-event-header-view.js';
import FormEventRollupBtnView from '../view/form-event/form-event-rollupbtn-view.js';
import FormSectionDetailsView from '../view/form-event/form-event-section-details-view.js';
import FormSectionDestinationView from '../view/form-event/form-event-section-destination-view.js';
import FormSectionOfferView from '../view/form-event/form-event-section-offer-view.js';
import FormDestinationPhotos from '../view/form-event/form-event-destination-photos-view.js';


const tripEventsContainerElement = document.querySelector('.trip-events');

export default class TripEventsPresenter {
  constructor(eventPoints, eventDestinations, eventOffers) {
    this.eventPoints = eventPoints;
    this.eventDestinations = eventDestinations;
    this.eventOffers = eventOffers;
  }

  tripEventsList = new TripEventsListView();

  firstTripItem = new TripItemView();

  formEdit = new FormEventView();

  formEditRollupBtn = new FormEventRollupBtnView();

  formSectionDetails = new FormSectionDetailsView();

  init () {
    this.destinations = [...this.eventDestinations.getDestinations()];

    this.offers = [...this.eventOffers.getOffers()];

    const formEditHeader = new FormEventHeaderView('Delete', this.destinations);
    const formSectionOffer = new FormSectionOfferView('offers', this.offers);
    const formSectionDestination = new FormSectionDestinationView('destination', this.destinations);
    const formDestintaionPhotos = new FormDestinationPhotos(this.destinations);

    this.points = [...this.eventPoints.getPoints()];
    render(this.tripEventsList, tripEventsContainerElement);

    render (this.firstTripItem, this.tripEventsList.getElement());

    render(this.formEdit, this.firstTripItem.getElement());

    render(formEditHeader, this.formEdit.getElement());

    render(this.formEditRollupBtn, formEditHeader.getElement());

    render(this.formSectionDetails, this.formEdit.getElement());

    render(formSectionOffer, this.formSectionDetails.getElement());

    render(formSectionDestination, this.formSectionDetails.getElement());

    render(formDestintaionPhotos, this.formSectionDetails.getElement());

    const fromTimeInputElement = document.querySelector('#event-start-time-1');
    const toTimeInputElement = document.querySelector('#event-end-time-1');
    createDatePickers(fromTimeInputElement, toTimeInputElement);

    for (let i = 0; i < this.points.length; i++) {
      const tripItem = new TripItemView();

      render(new TripEventView(this.points[i]), tripItem.getElement());

      render(tripItem, this.tripEventsList.getElement());
    }
  }
}
