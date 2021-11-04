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
// import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   input: document.querySelector('.js-feedback-form input'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };
// const EMAIL_STORAGE_KEY = 'email-key';
// const MESSAGE_STORAGE_KEY = 'message-key';
// const THROTTLE_DELAY = 500;
// const formData = {};

// populateTextarea();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onInputFunction, THROTTLE_DELAY));
// refs.textarea.addEventListener(
//   'input',
//   throttle(onTextareaInput, THROTTLE_DELAY)
// );

// refs.form.addEventListener('input', e => {
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

// function onFormSubmit(event) {
//   event.preventDefault();
//   //   console.log('send form');
//   event.target.reset();
//   localStorage.removeItem('EMAIL_STORAGE_KEY');
//   localStorage.removeItem('MESSAGE_STORAGE_KEY');
// }

// function onInputFunction(event) {
//   const email = event.target.value;
//   localStorage.setItem('EMAIL_STORAGE_KEY', email);
// }

// function onTextareaInput(event) {
//   //   localStorage.setItem('input.value');
//   const message = event.target.value;
//   localStorage.setItem('MESSAGE_STORAGE_KEY', message);
//   // console.log(message);
// }

// function populateTextarea() {
//   const savedEmail = localStorage.getItem('EMAIL_STORAGE_KEY');
//   const savedMessage = localStorage.getItem('MESSAGE_STORAGE_KEY');
//   if (savedMessage) {
//     // console.log(savedMessage);
//   }
//   refs.input.value = savedEmail;
//   refs.textarea.value = savedMessage;
// }
//+++++++++++++++++++++++++++++++
// import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.js-feedback-form'),
// };
// const FORM_STORAGE_KEY = 'feedback-form-state';
// const THROTTLE_DELAY = 500;
// const formData = {};
// const savedFormDataJSON = localStorage.getItem('feedback-form-state');
// const savedFormData = JSON.parse(savedFormDataJSON);

// refs.form.addEventListener(
//   'input',
//   throttle(event => {
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
//     const stringFormData = JSON.stringify(formData);
//     localStorage.setItem(FORM_STORAGE_KEY, stringFormData);
//   }, THROTTLE_DELAY)
// );

// refs.form.addEventListener('submit', event => {
//   event.preventDefault();
//   localStorage.removeItem(FORM_STORAGE_KEY);
// });

//++++++++++++++++++++++++++++++
// refs.input.addEventListener('input', throttle(onInputFunction, THROTTLE_DELAY));
// refs.textarea.addEventListener(
//   'input',
//   throttle(onTextareaInput, THROTTLE_DELAY)
// );

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
//   const stringFormData = JSON.stringify(formData);
//   console.log(stringFormData);
//   localStorage.setItem(FORM_STORAGE_KEY, stringFormData);
// });

// function onFormSubmit() {
//   refs.form.localStorage.getItem(FORM_STORAGE_KEY);
//   // const stringFormData = JSON.stringify(formData);
//   // console.log(stringFormData);
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log('send form');
//   event.target.reset();
//   // localStorage.removeItem('FORM_STORAGE_KEY');
//   // localStorage.removeItem('MESSAGE_STORAGE_KEY');
// }

// function onInputFunction() {
//   // const email = event.target.value;
//   // console.log(typeof email);
//   // localStorage.setItem('EMAIL_STORAGE_KEY', email);
//   const stringFormData = JSON.stringify(formData);
//   console.log(stringFormData);
//   console.log(typeof stringFormData);
//   localStorage.setItem(FORM_STORAGE_KEY, stringFormData);
//   if (localStorage) {
//     const json = localStorage.getItem('feedback-form-state');
//     console.log(json);
//     const parsedJson = JSON.parse(json);
//     console.log(parsedJson);
//   }
// }

// function onTextareaInput(event) {
//   // localStorage.setItem('input.value');
//   const message = event.target.value;
//   localStorage.setItem('MESSAGE_STORAGE_KEY', message);
//   console.log(message);
// }

// function populateTextarea() {
//   const savedEmail = localStorage.getItem('EMAIL_STORAGE_KEY');
//   const savedMessage = localStorage.getItem('MESSAGE_STORAGE_KEY');
//   if (savedMessage) {
//     // console.log(savedMessage);
//   }
//   refs.input.value = savedEmail;
//   refs.textarea.value = savedMessage;
// }
//+++++++++++++++++++++
// var throttle = require('lodash.throttle');
// const feedbackForm = document.querySelector('.feedback-form');

// const savedFormDataJSON = localStorage.getItem('feedback-form-state');
// const savedFormData = JSON.parse(savedFormDataJSON);

// if (savedFormData !== null) {
//   feedbackForm['email'].value = savedFormData.email;
//   feedbackForm['message'].value = savedFormData.message;
// }

// feedbackForm.addEventListener(
//   'input',
//   throttle(event => {
//     const formData = {
//       email: `${feedbackForm['email'].value}`,
//       message: `${feedbackForm['message'].value}`,
//     };
//     const formDataJSON = JSON.stringify(formData);

//     localStorage.setItem('feedback-form-state', formDataJSON);
//   }, 500)
// );

// feedbackForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const formData = {
//     email: `${feedbackForm['email'].value}`,
//     message: `${feedbackForm['message'].value}`,
//   };
//   console.log(formData);

//   //remove data from localStorage and feedback-form
//   localStorage.removeItem('feedback-form-state');
//   feedbackForm['email'].value = '';
//   feedbackForm['message'].value = '';
// });
// //=======================================
// import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.js-feedback-form'),
// };
// const FORM_STORAGE_KEY = 'feedback-form-state';
// const THROTTLE_DELAY = 500;
// const formData = {};

// refs.form.addEventListener(
//   'input',
//   throttle(event => {
//     formData[event.target.name] = event.target.value;
//     console.log(formData);
//     const stringFormData = JSON.stringify(formData);
//     localStorage.setItem(FORM_STORAGE_KEY, stringFormData);
//   }, THROTTLE_DELAY)
// );

// refs.form.addEventListener('submit', event => {
//   event.preventDefault();
//   localStorage.removeItem(FORM_STORAGE_KEY);
// });
//++++++++++++++++++++

import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inputText, 500));
form.addEventListener('submit', submitForm);
const INPUT_KEY = 'feedback-form-state';
let objectInput = {};

inForm();

function submitForm(event) {
  event.preventDefault();
  const formEl = event.target.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;
  if (message === '' && email === '') {
    return alert('Поля "email" та "message" мають бути заповнені!');
  }
  if (email === '') {
    return alert('Поле "email" мають бути заповнені!');
  }
  if (message === '') {
    return alert('Поле "message" мають бути заповнені!');
  }
  objectInput = {
    email,
    message,
  };
  console.log(objectInput);

  form.reset();
  localStorage.removeItem(INPUT_KEY);
}

function inputText(event) {
  objectInput[event.target.name] = event.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(objectInput));
}

function inForm() {
  let saveText = localStorage.getItem(INPUT_KEY);
  if (saveText) {
    saveText = JSON.parse(saveText);
    Object.entries(saveText).forEach(([name, value]) => {
      objectInput[name] = value;
      form.elements[name].value = value;
    });
  }
}
