//Objeckts

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
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

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
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// .............................................................................
// Module 3 Test 25
// .............................................................................
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const { today: { high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;


// .............................................................................
// Module 3 Test 26
// .............................................................................
  // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// .............................................................................
// Module 3 Test 27
// .............................................................................
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// .............................................................................
// Module 3 Test 28
// .............................................................................
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [ ...firstGroupScores, ...secondGroupScores, ...thirdGroupScores ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// .............................................................................
// Module 3 Test 29
// .............................................................................
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// .............................................................................
// Module 3 Test 30
// .............................................................................
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//    const newObj = { category, priority, ...data,  completed };
//   return newObj;

//   // Пиши код выше этой строки
// }
// console.log(makeTask({})); //возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })); // возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.



// .............................................................................
// Module 3 Test 31
// .............................................................................
// Пиши код ниже этой строки
// function add(...args) {
//   let total = 0;
//   for ( const arg of args) {
//   total += arg;
//   }
//   return total;
//   // Пиши код выше этой строки
// }

// console.log(add(15, 27)); // возвращает 42.


// .............................................................................
// Module 3 Test 32 пример
// .............................................................................
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2, 3, 4); // 1 2 [3,4]



// .............................................................................
// Module 3 Test 32
// .............................................................................
// Пиши код ниже этой строки
// function addOverNum(value,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if ( arg > value) {
//     total += arg;
//   }
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(50, 15, 27)); // возвращает 0.
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71.


// .............................................................................
// Module 3 Test 33
// .............................................................................
// Пиши код ниже этой строки
// function findMatches(arrayFirst, ...args) {

//   const matches = []; // Не изменяй эту строку
//   for (let i of args) {
//     if (arrayFirst.includes(i)){
//       matches.push(i);
//     }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // возвращает [1, 2].
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // возвращает [17, 89, 2]

// .............................................................................
// Module 3 Test 34
// .............................................................................
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//   	return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Обновляем книгу ${oldName} на ${newName}`;
//   }
//   // Пиши код выше этой строки
// };


// .............................................................................
// Module 3 Test 35
// .............example................................................................
// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };
// ....................test 35.............................................................
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// const bookIndex = this.books.indexOf(oldName);
// this.books.splice(bookIndex, 1, newName);

//     // Пиши код выше этой строки
//   },
// };


// .............................................................................
// Module 3 Test 36
// .............................................................................
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],  // - свойство для объекта
//   // Пиши код выше этой строки
// };



// .............................................................................
// Module 3 Test 37
// .............................................................................
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//   return this.potions;  //  возвращает значения массива
//   },
//   // Пиши код выше этой строки
// };

// .............................................................................
// Module 3 Test 38
// .............................................................................
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };


// .............................................................................
// Module 3 Test 39
// .............................................................................
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.potions);

// .............................................................................
// Module 3 Test 40
// .............................................................................
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//   const potionIndex = this.potions.indexOf(oldName);
//   this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.potions);

// .............................................................................
// Module 3 Test 41
// .............................................................................
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    // const potionIndex = this.potions.indexOf(potionName);
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
        if (name === -1) {
          return `Зелья ${potionName} нет в инвентаре!`;
        };
        if (potionName === name) {
        return potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
        const { name } = potions[i];
      if (name === -1) {
        return `Зелья ${potionName} нет в инвентаре!`;
      };
      if (oldName === name) {
          potions[i].name = newName;
        return name;
      }
    }
  },
  // Пиши код выше этой строки
};
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Дыхание дракона'));  //, в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'),);  // [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
console.log(atTheOldToad.potions);

// правильный вариант решения от ментора
// ...........................................................
const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
        return this.potions;
    },
    addPotion(potionName) {
        if(this.potions.includes(potionName)) { return }
        else {
            this.potions.push(potionName);
            return this.potions;
        }
    },
    removePotion(potionName) {
        for(let i = 0; i < this.potions.length; i += 1) {
            if(this.potions[i].name === potionName) {
                this.potions.splice(i, 1)
            }
        }
    },
    updatePotionName(oldName, newName) {
        for(const value of this.potions) {
            if(value.name === oldName) {
                value.name = newName
            }
        }
    }
}
