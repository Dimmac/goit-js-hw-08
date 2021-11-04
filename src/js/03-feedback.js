import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.js-feedback-form'),
  // input: document.querySelector('.js-feedback-form input'),
  // textarea: document.querySelector('.js-feedback-form textarea'),
};
const FORM_STORAGE_KEY = 'feedback-form-state';
// const EMAIL_STORAGE_KEY = 'email-key';
// const MESSAGE_STORAGE_KEY = 'message-key';
const THROTTLE_DELAY = 500;
const formData = {};

populateForm();

refs.form.addEventListener('input', throttle(onInputFunction, THROTTLE_DELAY));
refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', e => {
  console.log(e.target.name);
  console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(event) {
  event.preventDefault();
  console.log('send form');
  event.target.reset();
  localStorage.removeItem(FORM_STORAGE_KEY);
}

function onInputFunction(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

// function onTextareaInput(event) {
//   //   localStorage.setItem('input.value');
//   const message = event.target.value;
//   localStorage.setItem('MESSAGE_STORAGE_KEY', message);
//   // console.log(message);
// }

function populateForm() {
  let savedText = localStorage.getItem(FORM_STORAGE_KEY);
  if (savedText) {
    savedText = JSON.parse(savedText);
    Object.entries(savedText).forEach(([name, value]) => {
      formData[name] = value;
      refs.form.elements[name].value = value;
    });
  }
}
