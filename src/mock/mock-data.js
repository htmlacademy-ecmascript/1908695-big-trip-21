const Destination = {
  AMOUNT: 10,
  DESCRIPTION: ['a true asian pearl', 'a perfect place to stay with a family', 'a beautiful old town', '', 'full of of cozy canteens where you can try the best coffee in the Middle East', 'for those who value comfort and coziness', 'middle-eastern paradise', 'famous for its crowded street markets with the best street food in Asia', 'with crowded streets'],
  NAME: ['Monza', 'Piza', 'Rimini', 'Palermo', 'Turin', 'Milan', 'Monaco', 'Barcelona', 'Arezzo', 'Geneva'],
  PICTURES: [
    {
      src: 'https://21.objects.pages.academy/static/destinations/18.jpg',
      description: 'Vien with crowded streets',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/5.jpg',
      description: 'Geneva a true asian pearl',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/20.jpg',
      description: 'Geneva with a beautiful old town',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/16.jpg',
      description: 'Vien a perfect place to stay with a family'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/10.jpg',
      description: 'Vien famous for its crowded street markets with the best street food in Asia'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/11.jpg',
      description: 'Vien full of of cozy canteens where you can try the best coffee in the Middle East'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/13.jpg',
      description: 'Vien with crowded streets'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/9.jpg',
      description: 'Rotterdam a perfect place to stay with a family',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/15.jpg',
      description: 'Rotterdam in a middle of Europe',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/4.jpg',
      description: 'Rotterdam middle-eastern paradise'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/18.jpg',
      description: 'Sochi a perfect place to stay with a family',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/7.jpg',
      description: 'Sochi in a middle of Europe',
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/9.jpg',
      description: 'Sochi famous for its crowded street markets with the best street food in Asia'
    },
    {
      src: 'https://21.objects.pages.academy/static/destinations/6.jpg',
      description: 'Sochi famous for its crowded street markets with the best street food in Asia',
    }
  ],
  MIN_PICTURES_AMOUNT: 0,
  MAX_PICTURES_AMOUNT: 5,
};

const Offer = {
  TYPE: ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'],
  OFFERS: {
    TITLE: ['Upgrade to a business class', 'Choose the radio station', 'Choose temperature', 'Order meal', 'Wake up at a certain time', 'Add luggage', 'Business lounge', 'Choose the time of check-in', 'Order a meal from the restaurant', 'With air conditioning', 'Choose live music', 'Choose VIP area' ],
    MIN_PRICE: 50,
    MAX_PRICE: 150,
    MIN_OFFERS_AMOUNT: 0,
    MAX_OFFERS_AMOUNT: 5,
  }
};

const Point = {
  AMOUNT: 10,
  MIN_BASE_PRICE: 100,
  MAX_BASE_PRICE: 500,
  IS_FAVORITE: [true, false],
  DATE_YEAR: 2024,
  DATE_START_MONTH: 0,
  DATA_END_MONTH: 11,
  DATE_START_DAY: 1,
  DATE_END_DAY: 31,
  DATE_START_HOUR: 0,
  DATE_END_HOUR: 24,
  DATE_START_MINUTES: 0,
  DATE_END_MINUTES: 60,
};

export { Destination, Offer, Point};
