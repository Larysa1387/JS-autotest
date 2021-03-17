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
//   if (this.items.includes(item)) {
//     this.items.splice(this.items.indexOf(item), 1);
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
class Car { };
const audi = new Car();
console.log(audi);


// ..............................................................................
// Module 5 test 9
// ..............................................................................
