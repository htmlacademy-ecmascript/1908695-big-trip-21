import { render } from '../render.js';
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
  tripEventsList = new TripEventsListView();

  firstTripItem = new TripItemView();

  formEdit = new FormEventView();

  formEditHeader = new FormEventHeaderView('Delete');

  formEditRollupBtn = new FormEventRollupBtnView();

  formSectionDetails = new FormSectionDetailsView();

  formSectionOffer = new FormSectionOfferView('offer');

  formSectionDestination = new FormSectionDestinationView('destination');

  formDestintaionPhotos = new FormDestinationPhotos();

  init () {
    render(this.tripEventsList, tripEventsContainerElement);

    render (this.firstTripItem, this.tripEventsList.getElement());

    render(this.formEdit, this.firstTripItem.getElement());

    render(this.formEditHeader, this.formEdit.getElement());

    render(this.formEditRollupBtn, this.formEditHeader.getElement());

    render(this.formSectionDetails, this.formEdit.getElement());

    render(this.formSectionOffer, this.formSectionDetails.getElement());

    render(this.formSectionDestination, this.formSectionDetails.getElement());

    render(this.formDestintaionPhotos, this.formSectionDetails.getElement());

    for (let i = 0; i < 3; i++) {
      const tripItem = new TripItemView();
      render(new TripEventView('MAR 18', 'taxi', 'Taxi Amsterdam', '10:30', '11:00', '30M', 20), tripItem.getElement());
      render(tripItem, this.tripEventsList.getElement());
    }
  }
}


