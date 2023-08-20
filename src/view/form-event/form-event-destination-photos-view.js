import { createElement } from '../../render.js';
import { getDestination } from './form-event-section-destination-view.js';

function createPhotoTemplate (src, altDescription) {
  return `<img class="event__photo" src="${src}" alt="${altDescription}">`;
}

function createPhotosHtml (photos) {
  const pictures = [];
  if (photos.length) {
    photos.map(({src, description}) => {
      pictures.push(createPhotoTemplate(src, description));
    });
  }
  return pictures.join('');
}

function createFormEventDestinationPhotosTemplate (photos = '') {
  return `<div class="event__photos-container ${photos.length ? '' : 'hidden'}">
  <div class="event__photos-tape">
  ${createPhotosHtml(photos)}</div>
  </div>`;
}

export default class FormDestinationPhotos {
  constructor(destinations){
    this.destinations = destinations;
  }

  getTemplate () {
    return createFormEventDestinationPhotosTemplate(getDestination(this.destinations)?.pictures);
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
