// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// ............................................................................
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!


// .............................................................
// module 2. test 1
// Используя паттерн «ранний возврат»
// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

// .............................................................
// module 2. test 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   };
//     return 'Доступ запрещен, неверный пароль!';

//   // Пиши код выше этой строки
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('jqueryismyjam'));


// .............................................................
// module 2. test 3
// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   }
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
//   return 'Заказ оформлен, с вами свяжется менеджер';

//   // Пиши код выше этой строки
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// .............................................................
// module 2. test 5
// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// .............................................................
// module 2. test 6
// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] =  'банан';

// console.log(fruits);


// .............................................................
// module 2. test 7
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);


// .............................................................
// module 2. test 8
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// .............................................................
// module 2. test 9
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
// const elFirst = array[0];
// const elLast  = array[array.length - 1];
//   return [elFirst, elLast];

//     // Пиши код выше этой строки
//   }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));

// .............................................................
// module 2. test 10
// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   words = message.split(delimeter);


//   // Пиши код выше этой строки
//   return words;
// }
// console.log(splitMessage('Манго спешит на поезд', ' '));

// ...........................................................................
// module 2. test 11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//   const totalValue = message.split(' ').length * pricePerWord;

//   return totalValue;

//   // Пиши код выше этой строки
// }
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));


// ...........................................................................
// module 2. test 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//  string = array.join(delimeter);


//   // Пиши код выше этой строки
//   return string;
// }

// console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));


// ...........................................................................
// module 2. test 13
// function slugify(title) {
//   // Пиши код ниже этой строки
//   const slug = title.split(' ').join('-').toLowerCase();

//   return slug;

//   // Пиши код выше этой строки
// }

// console.log(slugify('Массивы для новичков'));
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));


// ...........................................................................
// module 2. test 14
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(nonExtremeEls);

// ...........................................................................
// module 2. test 15
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// console.log(allClients);

// ...........................................................................
// module 2. test 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//   const newArray = firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);

//   return newArray;

//     // Пиши код выше этой строки
//   }
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));

// ...........................................................................
// module 2. test 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }


// ...........................................................................
// module 2. test 18
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//   total += i;
// }
//     return total;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(18));

// ...........................................................................
// module 2. test 19
// .................................................
// ПРИМЕР
// const planets = ['Земля', 'Марс', 'Венера'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// ..........................................................................
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }


// ...........................................................................
// module 2. test 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1){
// total += order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log( calculateTotalPrice([12, 85, 37, 4]));
// console.log( calculateTotalPrice([1, 2, 3]));



// ...........................................................................
// module 2. test 21
// function findLongestWord(string) {
//   let longestWord = 0;
//   let word = '';

//   for (let i = 0; i < string.split(' ').length; i += 1) {
//     if (string.split(' ')[i].length > longestWord) {
//       longestWord = string.split(' ')[i].length;
//       word = string.split(' ')[i];
//     }
//   }

//   return word;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// ...........................................................................
// module 2. test 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3].
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17].
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34].


// ...........................................................................
// module 2. test 23

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const newNumbers = [];
// for (let i = 0; i <= numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     newNumbers.push(numbers[i]);
//   }
// }
// return newNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].



// ...........................................................................
// module 2. test 24

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//  return fruits.includes(fruit); // Дополни эту строку
// }
// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));

// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.

// ...........................................................................
// module 2. test 25

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const newArray = [];
//   for (let i=0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//   newArray.push(array1[i]);
//   }
//   }
//   return newArray;

//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].

//..................................................................................................
// TASK 2
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function min(a, b) {
//  return a < b ? a : b;

// }
// console.log(min(7, 10));


//..................................................................................................
// TASK 8

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.splice(styles.length / 2, 1, 'Классика');

// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// ...........................................................................
// module 2. test 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i of order) {
//     total += i;
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ...........................................................................
// module 2. test 27

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//    if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ...........................................................................
// module 2. test 28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(d);

// ...........................................................................
// module 2. test 29
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
// let arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }

// }
// return arr;

// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));

// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].


// ...........................................................................
// module 2. test 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number); // выводит 10


// ...........................................................................
// module 2. test 31
// .............................пример........................................
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log('Нашли число 3, делаем возврат, прерывая цикл и функцию');
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log('Лог после цикла в теле функции');
// }

// const result = fn();
// console.log('Лог после выхода из функции');
// console.lof(`Результат выполнения функции ${result}`);
// .....................test 31........................................................
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//      return i;
//     }
//   }


//   // Пиши код выше этой строки
// }
// console.log(findNumber(2, 6, 5));

// ...........................................................................
// module 2. test 32
function includes(array, value) {
  // Пиши код ниже этой строки

  for (let item of array) {
    if (item === value) {
      return true;
    }
  }

  return false


  // Пиши код выше этой строки
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
