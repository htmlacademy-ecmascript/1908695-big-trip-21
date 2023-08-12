import { createElement } from '../../render.js';

function createPhotoTemplate (src) {
  return `<img class="event__photo" src="img/photos/${src}.jpg" alt="Event photo">`;
}

function createPhotosHtml () {
  const pictures = [];
  for (let i = 1; i <= 5; i++) {
    pictures.push(createPhotoTemplate(i));
  }
  return pictures.join('');
}


function createFormEventDestinationPhotosTemplate () {
  return `<div class="event__photos-container">
  <div class="event__photos-tape">
  ${createPhotosHtml()}</div>
  </div>`;
}

export default class FormDestinationPhotos {
  getTemplate () {
    return createFormEventDestinationPhotosTemplate();
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
