(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",h="date",f="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,a=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:h,h:r,m:i,s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",_={};_[$]=p;var y=function(t){return t instanceof S},M=function t(e,n,s){var i;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();_[r]&&(i=r),n&&(_[r]=n,i=r);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;_[o]=e,i=o}return!s&&i&&($=i),i||!s&&$},b=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},E=g;E.l=M,E.i=y,E.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(E.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(d);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return E},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,n){return E.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!E.u(e)||e,f=E.p(t),d=function(t,e){var s=E.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?s:s.endOf(a)},m=function(t,e){return E.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case c:return u?d(1,0):d(31,11);case l:return u?d(1,v):d(0,v+1);case o:var _=this.$locale().weekStart||0,y=(p<_?p+7:p)-_;return d(u?g-y:g+(6-y),v);case a:case h:return m($+"Hours",0);case r:return m($+"Minutes",1);case i:return m($+"Seconds",2);case s:return m($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,u=E.p(t),f="set"+(this.$u?"UTC":""),d=(o={},o[a]=f+"Date",o[h]=f+"Date",o[l]=f+"Month",o[c]=f+"FullYear",o[r]=f+"Hours",o[i]=f+"Minutes",o[s]=f+"Seconds",o[n]=f+"Milliseconds",o)[u],m=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var p=this.clone().set(h,1);p.$d[d](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[E.p(t)]()},v.add=function(n,u){var h,f=this;n=Number(n);var d=E.p(u),m=function(t){var e=b(f);return E.w(e.date(e.date()+Math.round(t*n)),f)};if(d===l)return this.set(l,this.$M+n);if(d===c)return this.set(c,this.$y+n);if(d===a)return m(1);if(d===o)return m(7);var p=(h={},h[i]=t,h[r]=e,h[s]=1e3,h)[d]||1,v=this.$d.getTime()+n*p;return E.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},h=function(t){return E.s(r%12||12,t,"0")},d=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:E.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:E.s(r,2,"0"),h:h(1),hh:h(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:E.s(a,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:i};return s.replace(m,(function(t,e){return e||p[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,h,f){var d,m=E.p(h),p=b(n),v=(p.utcOffset()-this.utcOffset())*t,g=this-p,$=E.m(this,p);return $=(d={},d[c]=$/12,d[l]=$,d[u]=$/3,d[o]=(g-v)/6048e5,d[a]=(g-v)/864e5,d[r]=g/e,d[i]=g/t,d[s]=g/1e3,d)[m]||g,f?$:E.a($)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=M(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return E.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),w=S.prototype;return b.prototype=w,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",c],["$D",h]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,S,b),t.$i=!0),b},b.locale=M,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=_[$],b.Ls=_,b.p={},b}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},h=function(t){return t instanceof $},f=function(t,e,n){return new $(t,n,e.$l)},d=function(t){return e.p(t)+"s"},m=function(t){return t<0},p=function(t){return m(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},g=function(t,e){return t?m(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function m(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*c[d(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[d(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(u);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=m.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=p(t/o),t%=o,this.$d.months=p(t/l),t%=l,this.$d.days=p(t/r),t%=r,this.$d.hours=p(t/i),t%=i,this.$d.minutes=p(t/s),t%=s,this.$d.seconds=p(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=g(this.$d.years,"Y"),e=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=g(n,"D"),i=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=g(a,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||o.negative,u=i.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+s.format+u+i.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(s[t])}))},v.as=function(t){return this.$ms/c[d(t)]},v.get=function(t){var e=this.$ms,n=d(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?p(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var s;return s=e?t*c[d(e)]:h(t)?t.$ms:f(t,this).$ms,f(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},m}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return f(t,{$l:n},e)},i.isDuration=h;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(t,e){return h(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return h(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()},178:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(s,i,r){var a=i.prototype;r.utc=function(t){return new i({date:t,utc:!0,args:arguments})},a.utc=function(e){var n=r(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},a.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var o=a.parse;a.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var l=a.init;a.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else l.call(this)};var u=a.utcOffset;a.utcOffset=function(s,i){var r=this.$utils().u;if(r(s))return this.$u?0:r(this.$offset)?u.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(e);if(!s)return null;var i=(""+s[0]).match(n)||["-",0,0],r=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===r?a:-a}(s),null===s))return this;var a=Math.abs(s)<=16?60*s:s,o=this;if(i)return o.$offset=a,o.$u=0===s,o;if(0!==s){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(a+l,t)).$offset=a,o.$x.$localOffset=l}else o=this.utc();return o};var c=a.format;a.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,e)},a.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var h=a.toDate;a.toDate=function(t){return"s"===t&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var f=a.diff;a.diff=function(t,e,n){if(t&&this.$u===t.$u)return f.call(this,t,e,n);var s=this.local(),i=r(t).local();return f.call(s,i,e,n)}}}()}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t="afterbegin";function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function s(t,e,n="beforeend"){e.insertAdjacentElement(n,t.getElement())}class i{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n  <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{constructor(t){this.value=t}getTemplate(){return`<div class="trip-filters__filter">\n          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n          <label class="trip-filters__filter-label" for="filter-everything">${this.value}</label>\n          </div>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class a{constructor(t,e,n,s){this.title=t,this.startDate=e,this.endDate=n,this.cost=s}getTemplate(){return`<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">${this.title}</h1>\n\n    <p class="trip-info__dates">${this.startDate}&nbsp;&mdash;&nbsp;${this.endDate}</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">${this.cost}</span>\n  </p>\n</section>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const o={EVERYTHING:"Everything",FUTURE:"Future",PRESENT:"Present",PAST:"Past"},l=document.querySelector(".trip-main"),u=document.querySelector(".trip-controls__filters");class c{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n         </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class h{constructor(t){this.value=t}getTemplate(){return`<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n  <label class="trip-sort__btn" for="sort-day">${this.value}</label>\n  </div>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const f={DAY:"Day",EVENT:"Event",TIME:"Time",PRICE:"Price",OFFERS:"Offers"},d=document.querySelector(".trip-events");class m{getTemplate(){return'<li class="trip-events__item"></li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function v(t){return t[Math.floor(Math.random()*t.length)]}const g=(t,e)=>{const n=Math.ceil(Math.min(Math.abs(t),Math.abs(e))),s=Math.floor(Math.max(Math.abs(t),Math.abs(e))),i=Math.random()*(s-n+1)+n;return Math.floor(i)},$=["a true asian pearl","a perfect place to stay with a family","a beautiful old town","","full of of cozy canteens where you can try the best coffee in the Middle East","for those who value comfort and coziness","middle-eastern paradise","famous for its crowded street markets with the best street food in Asia","with crowded streets"],_=["Monza","Piza","Rimini","Palermo","Turin","Milan","Monaco","Barcelona","Arezzo","Geneva"],y=[{src:"https://21.objects.pages.academy/static/destinations/18.jpg",description:"Vien with crowded streets"},{src:"https://21.objects.pages.academy/static/destinations/5.jpg",description:"Geneva a true asian pearl"},{src:"https://21.objects.pages.academy/static/destinations/20.jpg",description:"Geneva with a beautiful old town"},{src:"https://21.objects.pages.academy/static/destinations/16.jpg",description:"Vien a perfect place to stay with a family"},{src:"https://21.objects.pages.academy/static/destinations/10.jpg",description:"Vien famous for its crowded street markets with the best street food in Asia"},{src:"https://21.objects.pages.academy/static/destinations/11.jpg",description:"Vien full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://21.objects.pages.academy/static/destinations/13.jpg",description:"Vien with crowded streets"}],M={TYPE:["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],OFFERS:{TITLE:["Upgrade to a business class","Choose the radio station","Choose temperature","Order meal","Wake up at a certain time","Add luggage","Business lounge","Choose the time of check-in","Order a meal from the restaurant","With air conditioning","Choose live music","Choose VIP area"],MIN_PRICE:50,MAX_PRICE:150,MIN_OFFERS_AMOUNT:0,MAX_OFFERS_AMOUNT:5}},b=[!0,!1],E=Array.from({length:10},((t,e)=>function(t){return{id:`destination ${t}`,description:v($),name:v(_),pictures:Array.from({length:g(0,5)},(()=>v(y)))}}(e))),S=M.TYPE.map((t=>({type:t,offers:Array.from({length:g(M.OFFERS.MIN_OFFERS_AMOUNT,M.OFFERS.MAX_OFFERS_AMOUNT)},((t,e)=>({title:v(M.OFFERS.TITLE),price:g(M.OFFERS.MIN_PRICE,M.OFFERS.MAX_PRICE),id:"offer "+e++})))}))),w=Array.from({length:10},((t,e)=>function(t){const{type:e,offers:n}=v(S);return{id:`point ${t}`,basePrice:g(100,500),dateFrom:new Date(2024,g(0,11),g(1,31),g(0,24),g(0,60)).toISOString(),dateTo:new Date(2024,g(0,11),g(1,31),g(0,24),g(0,60)).toISOString(),isFavorite:v(b),type:e,offers:[...new Set(Array.from({length:g(M.OFFERS.MIN_OFFERS_AMOUNT,n.length)},(()=>v(n.map((({id:t})=>t))))))],destination:v(E.map((({id:t})=>t)))}}(e)));function D(){return v(w)}var T=n(484),O=n.n(T),F=n(646),Y=n.n(F),A=n(178),C=n.n(A);function H(t){return O().utc(t).format("HH:mm")}function x(t){const{dateFrom:e,type:n,dateTo:s,basePrice:i,isFavorite:r}=t;return`<div class="event">\n    <time class="event__date" datetime="${a=e,O().utc(a).format("YYYY-MM-DD")}">${function(t){const[e,n]=O().utc(t).format("MMM DD").split(" ");return`${e.toUpperCase()} ${n}`}(e)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${n} ${function(t){return E.find((e=>e.id===t.destination)).name}(t)}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${e.slice(0,16)}">${H(e)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${s.slice(0,16)}">${H(s)}</time>\n      </p>\n      <p class="event__duration">${function(t,e){const n=Math.abs(O().utc(t).diff(O().utc(e)));return O().duration(n).format("MM[M] DD[D] HH[H] mm[M]").split(" ").filter((t=>!/00\w/.test(t))).join(" ")}(e,s)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers ${t.offers.length?"":"hidden"}">\n    ${function(t){const e=[],n=function(t){return S.find((e=>e.type===t.type)).offers.filter((e=>t.offers.includes(e.id)))}(t);return n.forEach((t=>{e.push(`<li class="event__offer">\n  <span class="event__offer-title">${t.title}</span>\n  &euro;&nbsp;\n  <span class="event__offer-price">${t.price}</span>\n</li>`)})),e.join("")}(t)}\n\n    </ul>\n    <button class="event__favorite-btn ${r?"event__favorite-btn--active":""} type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>`;var a}O().extend(Y()),O().extend(C());class j{constructor(t,e,n,s,i){this.dateFrom=t,this.type=e,this.dateTo=n,this.basePrice=s,this.isFavorite=i}getTemplate(){return x(this.dateFrom,this.type,this.dateTo,this.basePrice,this.isFavorite)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class P{getTemplate(){return'<form class="event event--edit" action="#" method="post"></form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const I={taxi:"taxi",bus:"bus",train:"train",ship:"ship",drive:"drive",flight:"flight","check-in":"check-in",sightseeing:"sightseeing",restaurant:"restaurant"};class k{constructor(t){this.buttonName=t}getTemplate(){return t=this.buttonName,`<header class="event__header">\n  <div class="event__type-wrapper">\n  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n    <span class="visually-hidden">Choose event type</span>\n    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n  </label>\n  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n  <div class="event__type-list">\n    <fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${function(){const t=[];return Object.values(I).forEach((e=>{const n=function(t){return`<div class="event__type-item">\n  <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n  <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${t[0].toUpperCase()+t.slice(1)}</label>\n</div>`}(e);t.push(n)})),t.join("")}()}\n    </fieldset>\n  </div>\n</div>\n  <div class="event__field-group  event__field-group--destination">\n  <label class="event__label  event__type-output" for="event-destination-1">\n    Flight\n  </label>\n  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n  <datalist id="destination-list-1">\n    <option value="Amsterdam"></option>\n    <option value="Geneva"></option>\n    <option value="Chamonix"></option>\n  </datalist>\n</div>\n  <div class="event__field-group  event__field-group--time">\n  <label class="visually-hidden" for="event-start-time-1">From</label>\n  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n  &mdash;\n  <label class="visually-hidden" for="event-end-time-1">To</label>\n  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n</div>\n  <div class="event__field-group  event__field-group--price">\n  <label class="event__label" for="event-price-1">\n    <span class="visually-hidden">Price</span>\n    &euro;\n  </label>\n  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n</div>\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  ${function(t){return`<button class="event__reset-btn" type="reset">${t}</button>`}(t)}\n  </header>`;var t}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class U{getTemplate(){return'<button class="event__rollup-btn" type="button">\n  <span class="visually-hidden">Open event</span>\n  </button>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class R{getTemplate(){return'<section class="event__details"></section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class N{constructor(t){this.title=t}getTemplate(){return`   <section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">${this.title}</h3>\n  <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n</section>\n</section>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const L={luggage:{type:"luggage",title:"Add luggage",price:50},comfort:{type:"comfort",title:"Switch to comfort",price:80},meal:{type:"meal",title:"Add meal",price:15},seats:{type:"seats",title:"Choose seats",price:5},train:{type:"train",title:"Travel by train",price:40}};class z{constructor(t){this.title=t}getTemplate(){return`<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">${this.title}</h3>\n\n  <div class="event__available-offers">\n   ${function(){const t=[];return Object.values(L).forEach((({type:e,title:n,price:s})=>{const i=function(t,e,n){return`<div class="event__offer-selector">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-1" type="checkbox" name="event-offer-${t}">\n  <label class="event__offer-label" for="event-offer-${t}-1">\n    <span class="event__offer-title">${e}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${n}</span>\n  </label>\n</div>`}(e,n,s);t.push(i)})),t.join("")}()}\n  </div>\n</section>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class W{getTemplate(){return`<div class="event__photos-container">\n  <div class="event__photos-tape">\n  ${function(){const t=[];for(let e=1;e<=5;e++)t.push(`<img class="event__photo" src="img/photos/${e}.jpg" alt="Event photo">`);return t.join("")}()}</div>\n  </div>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const V=document.querySelector(".trip-events"),B=new class{points=Array.from({length:3},D);getPoints(){return this.points}},G=new class{formFilter=new i;headerInfoView=new a("Amsterdam &mdash; Chamonix &mdash; Geneva","Mar 18",20,1230);init(){s(this.headerInfoView,l,t),s(this.formFilter,u),Object.values(o).forEach((t=>s(new r(t),this.formFilter.getElement())))}},Z=new class{formSort=new c;init(){s(this.formSort,d,t),Object.values(f).forEach((t=>s(new h(t),this.formSort.getElement())))}},q=new class{constructor(t){this.eventPoints=t}tripEventsList=new p;firstTripItem=new m;formEdit=new P;formEditHeader=new k("Delete");formEditRollupBtn=new U;formSectionDetails=new R;formSectionOffer=new z("offer");formSectionDestination=new N("destination");formDestintaionPhotos=new W;init(){this.points=[...this.eventPoints.getPoints()],s(this.tripEventsList,V),s(this.firstTripItem,this.tripEventsList.getElement()),s(this.formEdit,this.firstTripItem.getElement()),s(this.formEditHeader,this.formEdit.getElement()),s(this.formEditRollupBtn,this.formEditHeader.getElement()),s(this.formSectionDetails,this.formEdit.getElement()),s(this.formSectionOffer,this.formSectionDetails.getElement()),s(this.formSectionDestination,this.formSectionDetails.getElement()),s(this.formDestintaionPhotos,this.formSectionDetails.getElement());for(let t=0;t<this.points.length;t++){const e=new m;s(new j(this.points[t]),e.getElement()),s(e,this.tripEventsList.getElement())}}}(B);G.init(),Z.init(),q.init()})()})();
//# sourceMappingURL=bundle.57dec50875c82c14332f.js.map