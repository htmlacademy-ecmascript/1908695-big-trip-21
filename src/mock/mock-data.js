import { getRandomArrayElement } from '../utils/utils.js';

const points = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 110,
    dateFrom: '2023-09-10T22:55:56.845Z',
    dateTo: '2023-09-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa30'
    ],
    type: 'taxi',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: 210,
    dateFrom: '2023-09-13T23:55:56.845Z',
    dateTo: '2023-09-18T07:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edc13',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa35',
    ],
    type: 'flight',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808v',
    basePrice: 50,
    dateFrom: '2023-09-19T13:00:56.845Z',
    dateTo: '2023-09-20T12:20:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa41',
    ],
    type: 'drive',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808v',
    basePrice: 300,
    dateFrom: '2023-09-21T13:15:56.845Z',
    dateTo: '2023-09-21T18:20:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edc12',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa40',
    ],
    type: 'sightseeing',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808v',
    basePrice: 300,
    dateFrom: '2023-09-21T22:00:56.845Z',
    dateTo: '2023-09-21T23:23:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edc12',
    isFavorite: true,
    type: 'check-in',
  },
];

const offers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa30',
        title: 'Meet with a table',
        price: 5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class',
        price: 120
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Order Uber',
        price: 20
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
        title: 'Silence mode',
        price: 10
      },
    ]},
  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa34',
        title: 'Add luggage',
        price: 30
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa35',
        title: 'Switch to comfort class',
        price: 100
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa36',
        title: 'Add meal',
        price: 15
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa37',
        title: 'Travel by train',
        price: 40
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa38',
        title: 'Choose seats',
        price: 5
      },
    ]},
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa39',
        title: 'Book tickets',
        price: 40
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa40',
        title: 'Lunch in city',
        price: 30
      },
    ]},
  {
    type: 'drive',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa41',
        title: 'Rent a car',
        price: 200
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa43',
        title: 'Personal driver',
        price: 1500
      },
    ]},
  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa42',
        title: 'Add breakfast',
        price: 50
      },
    ]}
];

const destinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcdd',
    name: 'Bergamo',
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building',
      }]},
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edc11',
    description: 'Monaco ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Monaco',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'Picture description',
      },
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: 'Picture description number two',
      }]},
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edc12',
    description: 'Monza Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    name: 'Monza',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: 'Picture description number three',
      },
      {
        src: 'https://loremflickr.com/248/152?random=4',
        description: 'Picture description number four',
      },
      {
        src: 'https://loremflickr.com/248/152?random=5',
        description: 'Picture description number five',
      }]},
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edc13',
    description: 'Rimini Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Rimini',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=6',
        description: 'Picture description number six',
      },
      {
        src: 'https://loremflickr.com/248/152?random=7',
        description: 'Picture description number seven',
      },
      {
        src: 'https://loremflickr.com/248/152?random=8',
        description: 'Picture description number eight',
      }]},
];

function getRandomPoint () {
  return getRandomArrayElement(points);
}

export {getRandomPoint, offers, destinations};
