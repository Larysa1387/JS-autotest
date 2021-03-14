// Callback function
// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(petya.name);
//   },
// };

// petya.showName();


// function fn() {
//   console.log(this);
// }

// fn(); // window без "use strict" и undefined с "use strict"

// .....Репета........................................................................
// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// }
// showTag(); // высвечивается ошибка, потому что this.tag - нет у функции, нет объкта

// const user = {
//   tag: 'mango',
// };

// user.showUserTag = showTag; // add as object feature showUserTag- function showTag
// console.log('user', user);
// ...........................................................................

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// user.showTag(); // вызываем метод showTag в контексте объекта user

// don't do this!
// const oops = user.showTag;
// oops(); // вызовем ссылку на функцию без контекста объекта( слева нет объекта). undefined
// ................................................................................

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };
// const invokeAction = function (actions) {
//   console.log(actions);
//   actions();
// }
// invokeAction(user.showTag); //undefined
// .......МЕТОДЫ ВНУТРИ ФУНКЦИИ.....................................................................
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
//   };

//   // changeColor(); // какой this? - undefined

//   const sweater = {
//     color: 'teal',
//   };
//   sweater.updateColor = changeColor;
//    sweater.updateColor('red'); // Какой this? - {color: "teal", updateColor: ƒ}
//   return sweater.updateColor;
// };

// makeChangeColor();

// .............................................................................
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this? - undefined

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('orange'); // Какой this?- {color: "blue", updateColor: ƒ}

// .........................................................................
// const showThis = function (...args) {
//   console.log(args);
//   console.log('showThis -> this', this);
// };

// showThis(); // What this? - undefined

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, 2, 4);

// const objB = {
//   x: 755,
//   y: 105,
// };

// showThis.call(objB, 1, 1, 2, 5);

// ....map................................................
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]


// ........Call....and.....apply................................................
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;

// }
// const hat = {
//     color: 'black',
// };
// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//   color: 'green',
// };

// const changeHatColor = changeColor.bind(hat); // Навсегда привязана к объекту hat
// const changeSweaterColor = changeColor.bind(sweater);
// ...............................................................................

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter); // 5 (потому что на 10 увеличили, потом на 5 уменьшили)
// .............................................................................

// .....Пишем скрипт для работы кнопочек в HTML.................................
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const decrementBt = document.querySelector('.js-decrement'); //  ссылка на кнопку (Такой был бы класс у клопки на уменьшение)
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value'); // ссылка на текст абзаца
// console.log(decrementBtn);
// console.log(incrementBtn);
// // добавляем слушателя событий (инлайн функцию, что будет, если кликнуть на кнопку)
// decrementBt.addEventListener('click', function () {
//   console.log('Кликнули на декремент');

//   counter.decrement();
//   console.log(counter);

//     // а теперь нужно соединить количество кликов с изменением текста в абзаце
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//   console.log('Кликнули на инкремент');

//   counter.increment();
//   console.log(counter);

//   // а теперь нужно соединить количество кликов с изменением текста в абзаце
//   valueEl.textContent = counter.value;
// });


// ................test.......................
// function User() { }
// User.prototype = { admin: false };

// let user = new User();

// User.prototype = { admin: true };

// alert(user.admin);
// ................................
// for(let i=0; i<10; i++) {
//   setTimeout(function() {
//     alert(i);
//   }, 100);
// }
// ..................................
// let str = "Hello";
// str.something = 5;
// alert(str.something);
// ...................................
// let y = 1;
// let x = y = 2;

// alert(x);
// ...............................
// alert(str); // ?
// let str = "Hello";
// ...........Чему равно значение выражения 4 - "5" + 0xf - "1e1"?.........
// console.log(4 - "5" + 0xf - "1e1"); // 4
// .........................................
// let a = X;
// alert(a == X);
// .........................................

// function f() {
//   alert(this);
// }
// f.call('omg');
// ........................................
// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;
// console.log(a + b + c);
// ........................................
// let f = function(x) {
//   alert(x)
// }

// (function() {
//   f(1)
// }()) // будет ошибка
// .....................................
// let arr = [1, 2, 3];
// arr.something = 5;

// alert(arr.something); // ?
// console.log(arr);
// .......................................
// console.log(null == undefined);
// console.log(null + { 0: 1 }[0] + [, [1],][1][0]); // будет 2, потому что [,[1],] - не считает

// alert(str); // ?
// var str = "Hello";



// .............................................................................
// Module 4 Test 1
// .............................................................................
// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;  //ссылка на  саму функцию


// .............................................................................
// Module 4 Test 2
// .........Example............................................................
// Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// .......test......................................................................
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback (pizzaName);
// }


// ..............ДОП. Занятие..............................................................................
// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

// const obj1 = {
//     'my name': 'John',
//     'i like my work': true,
//     'programming languages': ['js', 'java', 'c++', 'python']
// }

// const func = function (obj) {
//   let newObj = { ...obj };
//   for (let key in newObj) {
//     if (Array.isArray(newObj[key])) {
//       for (const elArr of newObj[key]) {
//         newObj[`I like ${elArr}`] = elArr;
//       }
//     }
//   }
//   return newObj;
// }
// console.log(func(obj1));

// ..............Task.2..................................................................................

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const multiplyNumeric = function (obj) {
//   for (let el in obj) {
//     if (typeof obj[el] === 'number') {
//       const newValue = obj[el] * 2;
//       obj[el] = newValue;
//     }
//   }
// }

// multiplyNumeric(menu);
// console.log(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// /////////////////////////////////////////////
// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника
// *решить в одну строку
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
// findBestEmployee({
// poly: 12,
// mango: 17,
// ajax: 4,
// }),
// ); // mango
// console.log(
// findBestEmployee({
// lux: 147,
// david: 21,
// kiwi: 19,
// chelsy: 38,
// }),
// ); // lux
// const findBestEmployee = function (obj) {
//   let bestEmployee = 0;
//   let str = "";
//   for (const key in obj) {
//     if (obj[key] > bestEmployee) {
//       bestEmployee = obj[key];
//       str = key;
//     }
//   }
//   return str;
// };
// почти идеальное решение
// const findBestEmployee = (employees) =>
//   Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );
// ........................................................................................................


// .............................................................................
// Module 4 Test 3
// .............................................................................
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`)});

// .............................................................................
// Module 4 Test 4
// ........ПРИМЕР.....................................................................
//   function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine); //Абонент Манго недоступен, оставьте сообщение.
// processCall('Поли', takeCall, leaveHoloMessage);

// ........TEST.4....................................................................
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, make, error) {
//     if (this.pizzas.includes(pizzaName)){
//       return make(pizzaName);
//     }
//     return error(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// console.log(makePizza('Аль Pопчино'));

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }
// console.log(onOrderError('Аль Копчино'));

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError)); // Ваш заказ принят. Готовим пиццу Аль Копчино.

// .............................................................................
// Module 4 Test 5
// .............................................................................
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// .............................................................................
// Module 4 Test 6
// .............................................................................
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     console.log(24000 - (5000 - 5000 * 0.15));
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// .............................................................................
// Module 4 Test 7
// .............................................................................
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// // composeMessage(orders, 1);

// const messages = orders.map(function (order, index) {
//     return composeMessage.call(order, index + 1);
// });
// console.log(messages);
// ......................................................................................
// ........пример на вебинаре..............................................................
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
​
// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = orders.map((element, index) =>
//   composeMessage.apply(element, [index + 1]),
// );
​
// // for (let i = 0; i < orders.length; i += 1) {
// //   messages.push(composeMessage.call(orders[i], i + 1));
// // }
​
// console.log(messages);

// .............................................................................
// Module 4 Test 8
// .............................................................................
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) =>
//   composeMessage.apply(order, [index + 1]));


  // .............................................................................
// Module 4 Test 9
// .............................................................................
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки
// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');


// .............................................................................
// Module 4 Test 10
// .............................................................................
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)); // добавили service.subscribe.bind(service)
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com',
    'poly@hotmail.de',
    'ajax@jmail.net',
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service)); // добавили service.unsubscribe.bind(service)
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']





// ....................................................................................
/**
 * http://fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html
 * http://fecore.net.ua/books/m5ph3r-javascript/module-04/closures.html
 * Измените анонимную функцию которая присваивается к result[i]
 * так, чтобы в результате в консоли мы послучили числа от 0 до 4 включительно
 */
const result = [];
for (var i = 0; i < 5; i++) {
  result[i] = function () {
    console.log(i);
  };
}
result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4
