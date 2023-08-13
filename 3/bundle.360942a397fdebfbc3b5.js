(()=>{"use strict";const e="afterbegin";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function n(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n  <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{constructor(e){this.value=e}getTemplate(){return`<div class="trip-filters__filter">\n          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n          <label class="trip-filters__filter-label" for="filter-everything">${this.value}</label>\n          </div>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{constructor(e,t,n,i){this.title=e,this.startDate=t,this.endDate=n,this.cost=i}getTemplate(){return`<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">${this.title}</h1>\n\n    <p class="trip-info__dates">${this.startDate}&nbsp;&mdash;&nbsp;${this.endDate}</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">${this.cost}</span>\n  </p>\n</section>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const a={EVERYTHING:"Everything",FUTURE:"Future",PRESENT:"Present",PAST:"Past"},r=document.querySelector(".trip-main"),o=document.querySelector(".trip-controls__filters");class m{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n         </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{constructor(e){this.value=e}getTemplate(){return`<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n  <label class="trip-sort__btn" for="sort-day">${this.value}</label>\n  </div>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const p={DAY:"Day",EVENT:"Event",TIME:"Time",PRICE:"Price",OFFERS:"Offers"},h=document.querySelector(".trip-events");class v{getTemplate(){return'<li class="trip-events__item"></li>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class u{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{constructor(e,t,n,i,s,l,a){this.date=e,this.eventType=t,this.eventTitle=n,this.startTime=i,this.endTime=s,this.eventDuration=l,this.price=a}getTemplate(){return`<div class="event">\n    <time class="event__date" datetime="2019-03-18">${this.date}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${this.eventType}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${this.eventTitle}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${this.startTime}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${this.endTime}</time>\n      </p>\n      <p class="event__duration">${this.eventDuration}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${this.price}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      <li class="event__offer">\n        <span class="event__offer-title">Order Uber</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">20</span>\n      </li>\n    </ul>\n    <button class="event__favorite-btn type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class _{getTemplate(){return'<form class="event event--edit" action="#" method="post"></form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const f={taxi:"taxi",bus:"bus",train:"train",ship:"ship",drive:"drive",flight:"flight","check-in":"check-in",sightseeing:"sightseeing",restaurant:"restaurant"};class g{constructor(e){this.buttonName=e}getTemplate(){return e=this.buttonName,`<header class="event__header">\n  <div class="event__type-wrapper">\n  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n    <span class="visually-hidden">Choose event type</span>\n    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n  </label>\n  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n  <div class="event__type-list">\n    <fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${function(){const e=[];return Object.values(f).forEach((t=>{const n=function(e){return`<div class="event__type-item">\n  <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n  <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${e[0].toUpperCase()+e.slice(1)}</label>\n</div>`}(t);e.push(n)})),e.join("")}()}\n    </fieldset>\n  </div>\n</div>\n  <div class="event__field-group  event__field-group--destination">\n  <label class="event__label  event__type-output" for="event-destination-1">\n    Flight\n  </label>\n  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n  <datalist id="destination-list-1">\n    <option value="Amsterdam"></option>\n    <option value="Geneva"></option>\n    <option value="Chamonix"></option>\n  </datalist>\n</div>\n  <div class="event__field-group  event__field-group--time">\n  <label class="visually-hidden" for="event-start-time-1">From</label>\n  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n  &mdash;\n  <label class="visually-hidden" for="event-end-time-1">To</label>\n  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n</div>\n  <div class="event__field-group  event__field-group--price">\n  <label class="event__label" for="event-price-1">\n    <span class="visually-hidden">Price</span>\n    &euro;\n  </label>\n  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n</div>\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  ${function(e){return`<button class="event__reset-btn" type="reset">${e}</button>`}(e)}\n  </header>`;var e}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class E{getTemplate(){return'<button class="event__rollup-btn" type="button">\n  <span class="visually-hidden">Open event</span>\n  </button>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{getTemplate(){return'<section class="event__details"></section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{constructor(e){this.title=e}getTemplate(){return`   <section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">${this.title}</h3>\n  <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n</section>\n</section>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const T={luggage:{type:"luggage",title:"Add luggage",price:50},comfort:{type:"comfort",title:"Switch to comfort",price:80},meal:{type:"meal",title:"Add meal",price:15},seats:{type:"seats",title:"Choose seats",price:5},train:{type:"train",title:"Travel by train",price:40}};class ${constructor(e){this.title=e}getTemplate(){return`<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">${this.title}</h3>\n\n  <div class="event__available-offers">\n   ${function(){const e=[];return Object.values(T).forEach((({type:t,title:n,price:i})=>{const s=function(e,t,n){return`<div class="event__offer-selector">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}">\n  <label class="event__offer-label" for="event-offer-${e}-1">\n    <span class="event__offer-title">${t}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${n}</span>\n  </label>\n</div>`}(t,n,i);e.push(s)})),e.join("")}()}\n  </div>\n</section>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class w{getTemplate(){return`<div class="event__photos-container">\n  <div class="event__photos-tape">\n  ${function(){const e=[];for(let t=1;t<=5;t++)e.push(`<img class="event__photo" src="img/photos/${t}.jpg" alt="Event photo">`);return e.join("")}()}</div>\n  </div>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const S=document.querySelector(".trip-events"),D=new class{formFilter=new i;headerInfoView=new l("Amsterdam &mdash; Chamonix &mdash; Geneva","Mar 18",20,1230);init(){n(this.headerInfoView,r,e),n(this.formFilter,o),Object.values(a).forEach((e=>n(new s(e),this.formFilter.getElement())))}},x=new class{formSort=new m;init(){n(this.formSort,h,e),Object.values(p).forEach((e=>n(new c(e),this.formSort.getElement())))}},A=new class{tripEventsList=new u;firstTripItem=new v;formEdit=new _;formEditHeader=new g("Delete");formEditRollupBtn=new E;formSectionDetails=new y;formSectionOffer=new $("offer");formSectionDestination=new b("destination");formDestintaionPhotos=new w;init(){n(this.tripEventsList,S),n(this.firstTripItem,this.tripEventsList.getElement()),n(this.formEdit,this.firstTripItem.getElement()),n(this.formEditHeader,this.formEdit.getElement()),n(this.formEditRollupBtn,this.formEditHeader.getElement()),n(this.formSectionDetails,this.formEdit.getElement()),n(this.formSectionOffer,this.formSectionDetails.getElement()),n(this.formSectionDestination,this.formSectionDetails.getElement()),n(this.formDestintaionPhotos,this.formSectionDetails.getElement());for(let e=0;e<3;e++){const e=new v;n(new d("MAR 18","taxi","Taxi Amsterdam","10:30","11:00","30M",20),e.getElement()),n(e,this.tripEventsList.getElement())}}};D.init(),x.init(),A.init()})();
//# sourceMappingURL=bundle.360942a397fdebfbc3b5.js.map