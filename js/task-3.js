// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input)
// підставляє його поточне значення в span#name - output як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів.
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const inputNameEl = document.querySelector("#name-output");

const onInputField = () => {
  const userName = inputEl.value.trim();
  inputNameEl.textContent = userName !== "" ? userName : "Anonymous";
};

inputEl.addEventListener("input", onInputField);
