// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// //   после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
// //     узлов используй document.createElement().

// const listEl = document.querySelector("#ingredients");

// const murkup = ingredients.map(item => {
//   const liEl = document.createElement('li');
//   liEl.textContent = item;
//   return liEl;
// });

// listEl.append(...murkup);

// const randomRgb = () => {
//   const rgbNum = () => Math.floor(Math.random() * 256);
//   const r = rgbNum();
//   const g = rgbNum();
//   const b = rgbNum();
//   return `rgb(${r},${g},${b})`;
// };
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

{/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}

// const ref = {
//   inputEl: document.querySelector('#name-input'),
//   textEl: document.querySelector('#name-output'),
// }

// ref.inputEl.addEventListener('input', onImputChange);

// function onImputChange({ target:{value}}) {
//   ref.textEl.textContent = value ? value : 'Незнакомец';
//   // evt.target.value ? ref.textEl.textContent = evt.target.value : ref.textEl.textContent = 'Незнакомец';
// }


// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const [inputRef, renderBtnRef, destroyBtnRef] = document.querySelector("#controls").children;
const boxesContainer = document.querySelector('#boxes');

const randomRgb = () => {
  return `rgb(${Math.random()*256<<0}, ${Math.random()*256<<0}, ${Math.random()*256<<0})`
}
console.log(randomRgb());

function createBoxes(amount) {
  const itemsArr = [];

  for (let i=1; i <= amount; i += 1){
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = randomRgb();
    divEl.style.width = divEl.style.height = i * 10 + 20 + 'px';
    itemsArr.push(divEl);
  }
  boxesContainer.append(...itemsArr);
}

renderBtnRef.addEventListener('click', () => createBoxes(+inputRef.value))
destroyBtnRef.addEventListener('click', () => { boxesContainer.innerHTML = ''; inputRef.value='' })
