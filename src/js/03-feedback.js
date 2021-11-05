import throttle from 'lodash.throttle';
const FORM_STORAGE_KEY = 'feedback-form-state';
const THROTTLE_DELAY = 500;
const refs = {
  form: document.querySelector('.feedback-form'),
};
const formData = {};

populateForm();

refs.form.addEventListener('input', throttle(onInputFunction, THROTTLE_DELAY));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log('send form');
  event.target.reset();
  localStorage.removeItem(FORM_STORAGE_KEY);
}

function onInputFunction(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

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
