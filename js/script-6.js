// Перебирающие методы массива
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);


// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user); //{id: "002", name: "Ajax", isActive: true}

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001')); // {id: "001", name: "Poly", isActive: false}
// console.log(getUserById(users, '003')); // {id: "003", name: "Chelsey", isActive: false}

// ............................................................................................
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);
// console.log(doubled);
// const reversed = doubled.reverse();

// console.log(reversed);


// ............................................................................................
// Module 6 test 1
// ........Example.............................................................................
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ......Module 6 test 1.....................................................................................
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(orderedItem =>
//     totalPrice += orderedItem
//   );

//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138



// ............................................................................................
// Module 6 test 2
// ............................................................................................
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//   numbers.forEach(number => {
//     if (number > value) {

//       filteredNumbers.push(number);
//     }
//   }
//   );

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3));


// ............................................................................................
// Module 6 test 3
// ............................................................................................
//   function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//   firstArray.forEach(num => {
//     if (secondArray.includes(num)) {
//         commonElements.push(num);
//       }
//     });

//     return commonElements;
//     // Пиши код выше этой строки
//   }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3].


// ............................................................................................
// Module 6 test 4
// .........Examle...................................................................................
// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return.
// используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.
// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. подходит только в случае когда
// в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// ......Module 6 test 4...............................................................................
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// ............................................................................................
// Module 6 test 5
// ............................................................................................
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ............................................................................................
// Module 6 test 6
// .....Example.......................................................................................
// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



// ....Module 6 test 6..........................................................................
// Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138


// ............................................................................................
// Module 6 test 7
// ............................................................................................
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

//  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4,5]


// ............................................................................................
// Module 6 test 8
// ............................................................................................
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40].



// ............................................................................................
// Module 6 test 9
// ............................................................................................
// const changeEven = (numbers, value) => {
//     // Пиши код ниже этой строки
//   const newEven = [];
//     numbers.forEach(number => {
//       if (number % 2 === 0) {
//       newEven.push(number + value);
//       }
//       if (number % 2 !== 0) {
//         newEven.push(number);
//       }
//     });
//   return newEven;

//     // Пиши код выше этой строки
//   }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// ............................................................................................
// Module 6 test 10
// ............................................................................................
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length) ;
// console.log(planetsLengths); // [5, 4, 6, 6]

// ............................................................................................
// Module 6 test 11
// ............................................................................................
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки

//   const titles = books.map(book => book.title);
// console.log(titles);

// ............................................................................................
// Module 6 test 12
// .....Example............flatMap().....1 доп вложенность......................................
// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// students.map((student) => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// .....Test..12..............................................................................
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);
// console.log(genres); //  [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ]


// ............................................................................................
// Module 6 test 13
// ............................................................................................
// Пиши код ниже этой строки
// const getUserNames = users => users.map(user => user.name);


// ............................................................................................
// Module 6 test 14
// ............................................................................................
// Пиши код ниже этой строки
// const getUserEmails = users => {
//     return users.map(user => user.email)
//   };

// ............................................................................................
// Module 6 test 15
// ............................................................................................
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// ............................................................................................
// Module 6 test 16
// ............................................................................................
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   console.log('~ allGenres', allGenres);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
//   console.log('~ uniqueGenres', uniqueGenres);

// ............................................................................................
// Module 6 test 17
// ............................................................................................
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// console.log('~ topRatedBooks', topRatedBooks);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);
// console.log('~ booksByAuthor', booksByAuthor);


// ............................................................................................
// Module 6 test 18
// ............................................................................................
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
];
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({eyeColor}) => eyeColor === color)
// };
// console.log('~ getUsersWithEyeColor', getUsersWithEyeColor(users, 'blue')); // вернет массив с 2мя объектами с голубыми глазами

// ............................................................................................
// Module 6 test 19
// ............................................................................................
// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({age}) => age > minAge && age < maxAge)
// };

// ............................................................................................
// Module 6 test 20
// ............................................................................................
// Пиши код ниже этой строки
// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({friends}) => friends.includes(friendName))
// };
// console.log('~ getUsersWithFriend', getUsersWithFriend(users, 'Briana Decker')); // вернетмассив с 1 объектом, у кого в друзьях есть Бриана

// ............................................................................................
// Module 6 test 21
// ............................................................................................
// Пиши код ниже этой строки

// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);

//   const uniqueFriends = allFriends.filter((user, index, array) => array.indexOf(user) === index);
//   return uniqueFriends;
// };
// ////Правильный вариант////////////////////////////////

// const getFriends = (users) => {
//     return users
//         .flatMap((user) => user.friends)
//         .filter((user, index, array) => array.indexOf(user) === index);
// };
// console.log(getFriends(users));

// ............................................................................................
// Module 6 test 22
// ............................................................................................
// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true);
// };
// console.log('~ getActiveUsers', getActiveUsers(users));

// ............................................................................................
// Module 6 test 23
// ............................................................................................
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive !== true)
// };

// ............................................................................................
// Module 6 test 24
// ............................................................................................
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// console.log('~ bookWithTitle', bookWithTitle);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log('~ bookByAuthor', bookByAuthor);

// ............................................................................................
// Module 6 test 25
// ............................................................................................
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };

// ............................................................................................
// Module 6 test 26
// ............................................................................................
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(elem => elem % 2 === 0);
// console.log('~ eachElementInFirstIsEven', eachElementInFirstIsEven); // true
// const eachElementInFirstIsOdd = firstArray.every(elem => elem % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(elem => elem % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(elem => elem % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(elem => elem % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(elem => elem % 2 !== 0);

// ............................................................................................
// Module 6 test 27
// ............................................................................................
// Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//  return users.every(user => user.isActive === true)
// };

// ............................................................................................
// Module 6 test 28
// ............................................................................................
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);
// console.log('~ anyElementInSecondIsEven', anyElementInSecondIsEven); // false
// const anyElementInSecondIsOdd = secondArray.some(elem => elem % 2 !== 0);
// console.log('~ anyElementInSecondIsOdd', anyElementInSecondIsOdd); // true

// const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(elem => elem % 2 !== 0);

// ............................................................................................
// Module 6 test 29
// ............................................................................................
// Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive === true)
// };

// ............................................................................................
// Module 6 test 30
// ....reduce() example............................................................................
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// ......Module 6 test 30..............................................................................

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, number) => { return acc + number}, 0);
// console.log('~ totalPlayTime', totalPlayTime);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length; // cреднее время игры


// ............................................................................................
// Module 6 test 31
// ......ПРимер......................................................................................
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log('~ totalScore', totalScore);

// const averageScore = totalScore / students.length;

// .....Module 6 test 31.......................................................................
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

//   const totalAveragePlaytimePerGame = players.reduce((acc, player)=> {
//     return acc + player.playtime / player.gamesPlayed
//   }, 0);

// console.log('~ totalAveragePlaytimePerGame', totalAveragePlaytimePerGame);

// ............................................................................................
// Module 6 test 32
// ............................................................................................
// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return users.reduce((acc, user) => {
    return acc + user.balance
  }, 0);
};
console.log('~ calculateTotalBalance', calculateTotalBalance(users));


// ............................................................................................
// Module 6 test 33
// ............................................................................................


const getTotalFriendCount = users => {

  return users
    .flatMap((user) => user.friends)
    .reduce((acc, user) => {
      return acc + user.friends.length;
    }, 0);
};
console.log('~ getTotalFriendCount', getTotalFriendCount(users));
