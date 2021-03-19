// Module 5
// Класс со статическими свойствами и методами
// class Calc {
//   // Класс-калькулятор для двух аргументов
//   constructor() {}

//   // Метод как замена свойству
//   static get PI() {
//     return 3.14;
//   }

//   // Статический метод +
//   static add(...args) {
//     return args.reduce((acc, next) => acc + next, 0);
//   }

//   // Статический метод *
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }

// console.log(Calc.PI); // 3.14
// console.log(Calc.add(2, 3, 4)); // 9
// console.log(Calc.mult(12, 3, 4)); // 144

// ..............................................................................
// Module 5 test 1
// ..............................................................................
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// ..............................................................................
// Module 5 test 2
// ..............................................................................
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;
// console.log(parent);
// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;
// console.log(child);
// Пиши код выше этой строки


// ..............................................................................
// Module 5 test 3
// ......Пример........................................................................
// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
// }

// const mango = new User('Манго', 'mango@mail.com', 21);
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// ......Module 5 test 3..............................................................................
// function Car (brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const audi = new Car('Audi', 'Q3', 36000);
// console.log(audi);

// ..............................................................................
// Module 5 test 4
// ......Пример........................................................................
// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log("mango", mango);
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

// ......Module 5 test 4.............................................................................
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// ..............................................................................
// Module 5 test 5
// ..............................................................................
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function() {
//   return this.price;
// };
// Car.prototype.changePrice = function(newPrice) {
//   this.price = newPrice;
// };
// console.log(Car.prototype.hasOwnProperty('getPrice'));
// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi.getPrice()); // вызов метода getPrice() вернет число 36000.


// ..............................................................................
// Module 5 test 6
// ..............................................................................
// function Storage(items){
//   this.items = items;
// };
// Storage.prototype.getItems = function(){
//   return this.items;
// };
// Storage.prototype.addItem = function(newItem){
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function(item){
//   if (this.items.includes(item)) {  // или можно вот так: const itemIndex = this.#items.indexOf(item);
//     this.items.splice(this.items.indexOf(item), 1);  // и вторая строка this.#items.splice(itemIndex, 1);
//   };

// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ..............................................................................
// Module 5 test 7
// ..............................................................................
// function StringBuilder(baseValue){
// this.value = baseValue;
// };
// StringBuilder.prototype.getValue = function(){
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function(str){
//   this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function(str){
// this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function(str){
// this.value = str + this.value + str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// ..............................................................................
// Module 5 test 8
// ..............................................................................
// class Car { };
// const audi = new Car();
// console.log(audi);


// ..............................................................................
// Module 5 test 9
// ..............................................................................
// class Car {
//   constructor ({ brand, model, price }){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// }

// ..............................................................................
// Module 5 test 10
// ..............................................................................
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   return this.price;
//   }
//   changePrice(newPrice){
//   this.price = newPrice;
//   }
// }

// ..............................................................................
// Module 5 test 11
// ..............................................................................
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//   return this.#brand;
//   }
//   changeBrand(newBrand){
//   this.#brand = newBrand;
//   }
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car1); //получится объект { model: 'Q3', price: 36000 }
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 })); // получится объект { model: 'X5', price: 58900 }.


// ..............................................................................
// Module 5 test 12
// ..............................................................................
// class Storage {
//   #items;
//   constructor(items) {
//   this.#items = items;
// 	}

// getItems() {
//   return this.#items;
// };

// addItem(newItem) {
//   this.#items.push(newItem);
// };

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]



// ..............................................................................
// Module 5 test 13
// ..............................................................................
// class StringBuilder{
//   #value;
//   constructor(baseValue) {
//   this.#value = baseValue;
// }

// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };

// padStart(str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ..............................................................................
// Module 5 test 14
// ......проверка гетеров и сетеров.........ПРИМЕР.....................................
// set email(newEmail) {
//   if(newEmail === '') {
//     console.log('Ошибка! Почта не может быть пустой строкой!');
//     return;
//   }

//   this.#email = newEmail;
// }
// .....Test 14............................................................................
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// };


// ..............................................................................
// Module 5 test 15
// .....ПРИМЕР..................................................................
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;

//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (User.TYPES[newType] === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }

//     this.#type = newType;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });

// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor

// .....Test 15............................................................................
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice <= Car.MAX_PRICE){
//     this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// ..............................................................................
// Module 5 test 16
// .....ПРИМЕР..................................................................
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });
// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false

// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true

// ......Test 16.......................................................................
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//   	if (price > Car.#MAX_PRICE) {
// 		return 'Внимание! Цена превышает допустимую.';
//   	}
//     return 'Всё хорошо, цена в порядке.';
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// ..............................................................................
// Module 5 test 17
// ...............................................................................
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
//   // Пиши код ниже этой строки
//   class Admin extends User {
//   static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser',
//     };
//   }
// console.log(Admin.AccessLevel.BASIC); //  basic


// ..............................................................................
// Module 5 test 18
// ...............................................................................
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
// 	accessLevel;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   constructor({email, accessLevel}) {
//   super(email);
//   this.accessLevel = accessLevel;
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// ..............................................................................
// Module 5 test 19
// ...............................................................................
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = [];


  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email){
  this.blacklistedEmails.push(email);
  }

  isBlacklisted(email){
    return this.blacklistedEmails.includes(email);
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true
