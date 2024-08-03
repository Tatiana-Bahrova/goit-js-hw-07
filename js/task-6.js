// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.
// Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з
// відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
// Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно.
// Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число,
// що зберігає кількість елементів для рендеру.

// Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount.
// Усі ці < div > мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

const inputForm = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;
    const divEl = `<div class='new-div' style='width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}'></div>`;
    divBoxes.insertAdjacentHTML("beforeend", divEl);
  }
}

function onBtnCreate() {
  const amount = parseInt(inputForm.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputForm.value = "";
}

function clearDiv() {
  divBoxes.innerHTML = "";
}

createBtn.addEventListener("click", onBtnCreate);
destroyBtn.addEventListener("click", clearDiv);
console.log(divBoxes);
