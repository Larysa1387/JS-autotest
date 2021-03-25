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
const changeEven = (numbers, value) => {
    // Пиши код ниже этой строки
  const newEven = [];
    numbers.forEach(number => {
      if (number % 2 === 0) {
      newEven.push(number + value);
      }
      if (number % 2 !== 0) {
        newEven.push(number);
      }
    });
  return newEven;

    // Пиши код выше этой строки
  }
console.log(changeEven([1, 2, 3, 4, 5], 10));

// ............................................................................................
// Module 6 test 10
// ............................................................................................
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length) ;
console.log(planetsLengths); // [5, 4, 6, 6]
