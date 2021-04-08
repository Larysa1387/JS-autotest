import users from './data.js';
// console.log(users);

// Task 3

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, userGender) => {
//   return users
//     .filter(({gender}) => gender === userGender)
//     .map(({name}) => name)
// };
// console.log(getUsersWithGender(users, 'male'));
// ....Аналог..........................................................
// const getUsersWithGender = (users, userGender) => {
//   return users
//     .reduce((acc, user) => {
//       if (user.gender === userGender) {
//         acc.push(user.name);
//       }
//       return acc
//     }, [])
// }
// console.log(getUsersWithGender(users, 'male'));


// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age >= min && user.age <= max )
// }
// console.log( getUsersWithAge( users, 20, 30 ) );
// console.log( getUsersWithAge( users, 30, 40 ) );


// Task 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getNamesSortedByFriendsCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name)
// }
// console.log(getNamesSortedByFriendsCount(users));

/// Task 12

// Возврат: строка, отформатированная как список имен,
// разделенных запятыми, за исключением последних двух имен,
// которые должны быть разделены амперсандом.

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}] Вернет 'Bart, Lisa, Maggie, Homer & Marge',

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}] вернет  'Bart, Lisa & Maggie'

// [{name: 'Bart'},{name: 'Lisa'}] вернет 'Bart & Lisa',

// [{name: 'Bart'}] вернет 'Bart'

// [] вернет ''

// const getList = users => {
//   const nameList = users.map(user => user.name)
//   if (nameList.length > 2) {
//     const names = nameList.splice(nameList.length - 2, 2);
//     const str = nameList.join(', ') + ', ' + names.join(' & ');
//     return str;
//   }
//   else if (nameList.length === 2) {
//     return nameList.join(' & ');
//   }
//   else {
//     return nameList.join('');
//   }
//   // console.log(nameList.join(', '));
// }

// ....аналог..................................................
// const getList = users => {
//   const arr = users.map(user => user.name)
//   return arr.length <= 2 ? arr.join(' & ') : arr.splice(0, arr.length -2).join(', ') + ', ' + arr.splice(arr.length - 2, 2).join(' & ')
// }

// ....аналог..................................................
// const getList = users => {
//   const arr = users.map(({ name }) => name)
//   return arr.length <= 2 ? arr.join(" & ") : arr.slice(0, arr.length - 1).join(", ") + " & " + arr.pop() ;
// };


// console.log(getList([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
// console.log(getList([{ name: 'Bart' }, { name: 'Lisa' }]));
// console.log(getList([{ name: 'Bart' }]));
// console.log(getList([]));


// .................................................................
// Task 1
​
// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
​
// const getUserNames = usersData => {
//   return usersData.map(user => user.name);
// };
​
// console.log(getUserNames(users));
​
// Task 4
​
// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
​
// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) => !isActive);
// };
​
// console.log(getInactiveUsers(users));
​
// Task 7
​
// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916
​
// const calculateTotalBalance = users =>
//   users.reduce((acc, user) => acc + user.balance, 0);
​
// console.log(calculateTotalBalance(users));
​
// Task 10
​
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
​
// const getSortedUniqueSkills = users => {
//   return users
//     .flatMap(user => user.skills)
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort();
// };
​
// console.log(getSortedUniqueSkills(users));
​
// Task 13
​
// Дополни функцию getTotalBalanceByGender(users, gender, maxAge) так, чтобы она возвращала
// общий баланс пользователей (свойство balance), пол которых
// (свойство gender) совпадает со значением параметра gender и возраст которых меньше, чем maxAge.
​
// const getTotalBalanceByGender = (users, gender, maxAge) => {
//   return users.reduce((acc, user) => {
//     if (user.gender === gender && user.age <= maxAge) {
//       acc += user.balance;
//     }
//     return acc;
//   }, 0);
// };
// ​
// console.log(getTotalBalanceByGender(users, 'male', 30));

// /................................................................................
// Task 2
​
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
​
// const getUsersWithEyeColor = (userEye, color) => {
//   return userEye.filter(user => user.eyeColor === color);
// };
​
// console.log(getUsersWithEyeColor(users, 'blue'));
​
// Task 5
​
// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
​
// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
​
// Task 8
​
// Массив имен всех пользователей у которых есть друг с указанным именем.
​
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };
​
// const getUsersWithFriend = (users, friendName) => {
//   return users.reduce((acc, user) => {
//     if (user.friends.includes(friendName)) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// };
​
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
​
// Task 11
​
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
​
// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.
​
// const arr = [1, 2, 3, 4, 5];
​
// const getSums = arr => {
//   let sum = 0;
​
//   return arr.reduce((acc, el) => {
//     acc.push(sum + el);
//     sum += el;
//     return acc;
//   }, []);
// };
​
// console.log(getSums(arr));
