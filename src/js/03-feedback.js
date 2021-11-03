// console.log(localStorage);
// localStorage.setItem('my-data', 'qweqwe');
// localStorage.setItem('my-data', JSON.stringify({ user: 'mango', value: 3 }));
// console.log(localStorage.getItem('my-data'));
// const savedData = localStorage.getItem('my-data');
// console.log(savedData);
// console.log(typeof savedData);
// const parsedData = JSON.parse(savedData);
// console.log(parsedData);
// console.log(typeof parsedData);
import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.js-feedback-form'),
  input: document.querySelector('.js-feedback-form input'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};
const EMAIL_STORAGE_KEY = 'email-key';
const MESSAGE_STORAGE_KEY = 'message-key';
const formData = {};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputFunction, 1000));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

refs.form.addEventListener('input', e => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(event) {
  event.preventDefault();
  //   console.log('send form');
  event.target.reset();
  localStorage.removeItem('EMAIL_STORAGE_KEY');
  localStorage.removeItem('MESSAGE_STORAGE_KEY');
}

function onInputFunction(event) {
  const email = event.target.value;
  localStorage.setItem('EMAIL_STORAGE_KEY', email);
}

function onTextareaInput(event) {
  //   localStorage.setItem('input.value');
  const message = event.target.value;
  localStorage.setItem('MESSAGE_STORAGE_KEY', message);
  // console.log(message);
}

function populateTextarea() {
  const savedEmail = localStorage.getItem('EMAIL_STORAGE_KEY');
  const savedMessage = localStorage.getItem('MESSAGE_STORAGE_KEY');
  if (savedMessage) {
    // console.log(savedMessage);
  }
  refs.input.value = savedEmail;
  refs.textarea.value = savedMessage;
}
