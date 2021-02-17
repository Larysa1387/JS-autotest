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
function getExtremeElements(array) {
    // Пиши код ниже этой строки
const elFirst = array[0];
const elLast  = array[array.length - 1];
  return [elFirst, elLast];

    // Пиши код выше этой строки
  }
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));

// .............................................................
// module 2. test 10
function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  words = message.split(delimeter);


  // Пиши код выше этой строки
  return words;
}
console.log(splitMessage('Манго спешит на поезд', ' '));
