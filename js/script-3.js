//  Массивы

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

// ....................................................
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
// const entries = Object.entries(hotel);
// console.log(entries);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */
// .........................................................................

// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);

// add(1, 2, 3, 4, 5);
// ..........................................................................

// const add = function(value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// .............................................................................
// Module 3 Test 1
// .............................................................................
// const apartment = {
// imgUrl: 'https://via.placeholder.com/640x480',
// descr: 'Просторная квартира в центре',
// rating: 4,
// price: 2153,
// tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartment);


// .............................................................................
// Module 3 Test 2
// .............................................................................
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   	owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };

// console.log(apartment);

// .............................................................................
// Module 3 Test 3
// .............................................................................
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// Пиши код ниже этой строки
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
  // Пиши код выше этой строки

  // .............................................................................
// Module 3 Test 4
// .............................................................................
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Пиши код выше этой строки
// console.log(lastTag);


// .............................................................................
// Module 3 Test 5
// .............................................................................
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// .............................................................................
// Module 3 Test 6
// .............................................................................
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');


// .............................................................................
// Module 3 Test 7
// .............................................................................
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : 'Ямайка',
//   city : 'Кингстон',
// };

// .............................................................................
// Module 3 Test 8
// .............................................................................
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name,
// price,
// image,
// tags,
//   // Пиши код выше этой строки
// };

// .............................................................................
// Module 3 Test 9
// .............................................................................
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
// [emailInputName]: 'henry.carter@aptmail.com',
// [passwordInputName]: 'jqueryismyjam',


//   // Пиши код выше этой строки
// };


// .............................................................................
// Module 3 Test 10
// .............................................................................
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// .............................................................................
// Module 3 Test 11
// .............................................................................
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if(apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// // Пиши код выше этой строки
// }
// console.log(keys);
// console.log(values);
// console.log(apartment);


// .............................................................................
// Module 3 Test 12
// .............................................................................
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки

// .........запасной вариант....... propCount = Object.keys(object).length;

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }

//   // Пиши код выше этой строки
//   return propCount;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// .............................................................................
// Module 3 Test 13
// .............................................................................
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
// values.push(apartment[key]);
// }
// console.log(values);

// .............................................................................
// Module 3 Test 14
// .............................................................................
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//  propCount = Object.keys(object).length;

//   return propCount;
//   // Пиши код выше этой строки
// }



// .............................................................................
// Module 3 Test 15
// .............................................................................
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// .............................................................................
// Module 3 Test 16
// .............................................................................
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// Запасной вариант:
//   const values = [];
//   for (const key in salaries) {
//     values.push(salaries[key]);
//     totalSalary += salaries[key];
// }

// Верный вариант для бота
//   const values = [];
//   const keys = Object.keys(salaries);

//   for (const key of keys) {
//   values.push(salaries[key]);
//   totalSalary += salaries[key];
// }
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330


// .............................................................................
// Module 3 Test 17
// .............................................................................
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }
// console.log(hexColors); // [ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
// console.log(rgbColors); // [ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]


// .............................................................................
// Module 3 Test 18
// .............................................................................
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;

//   // Пиши код выше этой строки
// }
// console.log(getProductPrice('Радар'));  // 1300
// console.log(getProductPrice('Кука'));  // null

// .............................................................................
// Module 3 Test 19
// .............................................................................
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   let values = [];

//   for (let product of products) {
//     const arrayOfNames = Object.keys(product);
//     // console.log(arrayOfNames);

//     for (let key of arrayOfNames) {
//       if (key === propName) {
//         // console.log(value);
//         values.push(product[key]);
//       }
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues('name'));  // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]


// .............................................................................
// Module 3 Test 20
// .............................................................................
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total = 0;

//   for (const product of products) {
//     // let name = product.name;
//     if (productName === product.name) {
//       total += product.price * product.quantity;
//     }
//   }
//     return total;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Бластер'));


// .............................................................................
// Module 3 Test 21
// .............................................................................
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow} = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


// .............................................................................
// Module 3 Test 22
// .............................................................................
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// .............................................................................
// Module 3 Test 23
// .............................................................................
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(meanTemperature);

// .............................................................................
// Module 3 Test 24
// .............................................................................
// ПРИМЕР
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {                                 for (const { title, author, rating } of books) {
//   const { title, author, rating } = book;                     console.log(title);
//                                                               console.log(author);
//   console.log(title);                                         console.log(rating);
//   console.log(author);                                        }
//   console.log(rating);
// }
// .................................................................................
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


// .............................................................................
// Module 3 Test 25
// .............................................................................
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const { today: { high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
  tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;
