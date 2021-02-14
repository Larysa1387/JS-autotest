// 'use strict';
// let hobby = 'Рыбалка';
// console.log(hobby);

// hobby = 'Танцы';
// console.log(hobby);

// const message = "Life is great!";
// console.log(message);

// const shouldRenew = confirm('Продлить подписку?');
// console.log(shouldRenew);

// let userInput = prompt('Введите число 69');
// userInput = Number(userInput);
// console.log(typeof userInput);
// console.log(userInput === 69);


// ........................................................................
// Module 1. test 16
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (available < ordered) {
//   message = 'На складе недостаточно товаров!';
// 	}
// else if (available >= ordered) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkStorage(100, 50));

// ........................................................................
// Module 1. test 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//  const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Недостаточно средств на счету!';
//   }
//   else {
//   customerCredits = customerCredits - totalPrice;
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
//   }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(5000, 10, 8000));

// ........................................................................
// Module 1. test 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === 'jqueryismyjam') { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }
// console.log(checkPassword('polyhax'));

// ........................................................................
// Module 1. test 20
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered === 0) {
//   message = 'В заказе еще нет товаров';
// }
// else if (available < ordered) {
//   message = 'Слишком большой заказ, на складе недостаточно товаров!';
// }
//   else {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(70, 0));

// ........................................................................
// Module 1. test 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // дополни эту строку

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));

// ........................................................................
// Module 1. test 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip' ; // дополни эту строку

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));

// ........................................................................
// Module 1. test 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Дополни эту строку

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));

// ........................................................................
// Module 1. test 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//     // Пиши код ниже этой строки
//  if (totalSpent >= 50000) {
//   discount = 0.1;
//  }
//  else if (totalSpent >= 20000 && totalSpent < 50000) {
//   discount = 0.05;
//  }
//   else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = 0.02;
//   }
//   else {
//   discount = 0;
//   }
//   // Пиши код выше этой строки
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));

// ........................................................................
// Module 1. test 25
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// 	message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер'

//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkStorage(100, 50));

// ........................................................................
// Module 1. test 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки
// message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!'
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));

// ........................................................................
// Module 1. test 27
// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter' : // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional' : // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization' : // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));

// ........................................................................
// Module 1. test 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Отменено пользователем!';
//     break;
//     case ADMIN_PASSWORD:
//       message = 'Добро пожаловать!';
//       break;
//     default :
//       message = 'Доступ запрещён, неверный пароль!';
//   }
//   return message;
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('jqueryismyjam'));


// ........................................................................
// Module 1. test 29
// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   let price;
// switch (country) {
//   case 'Китай':
//     price = 100;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;
//     case 'Чили':
//     price = 250;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;
//     case 'Австралия':
//     price = 170;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;
//     case 'Ямайка':
//     price = 120;
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     break;
//   default:
//     message = 'Извините, в вашу страну доставки нет';
// }
//   // Пиши код выше этой строки
//   return message;
// }
//   console.log(getShippingCost('Китай'));
//   console.log(getShippingCost('Австралия'));
//   console.log(getShippingCost('Германия'));

// ........................................................................
// Module 1. test 30
// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }
// console.log(getNameLength('Larysa'));

// ........................................................................
// Module 1. test 31
// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic[courseTopic.length - 1]);

// ........................................................................
// счетчик цикла while
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// бронь номеров в отеле счетчик
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// ........................................................................
// do... while
// let password = '';
// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// ........................................................................
// ........ for
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// ........................................................................
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);


// ........................................................................
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// ........................................................................
/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// ........................................................................
// Module 1. test 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
// console.log(getSubstring('Привет мир', 3));
// console.log(getSubstring('Привет мир', 6));

// ........................................................................
// Module 1. test 33
// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
//   if (message.length <= maxLength) {
//     result = message;
//   }
//   else {
//   result = message.slice(0, maxLength) + '...';
//   }

// // Пиши код выше этой строки
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log( formatMessage('Vestibulum facilisis purus nec', 30));

// ........................................................................
// Module 1. test 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Дополни эту строку
//   return normalizedInput;
// }
// console.log(normalizeInput('Это НЕ СпаМ'));

// ........................................................................
// Module 1. test 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Дополни эту строку
//   return result;
// }

// console.log(checkForName('Егор Колбасов', 'Егор'));

// ........................................................................
// Module 1. test 36
function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  message = message.toLowerCase();
  result = message.includes('sale') || message.includes('spam') ;
  // Этот метод сразу выводит резудьтат в виде буля true или false!!!!!
  return result;
}
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Amazing SaLe, only tonight!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
