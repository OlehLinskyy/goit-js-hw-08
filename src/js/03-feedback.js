var throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector('textarea');


formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(handleSubmit, 500));

populateForm();

function handleSubmit(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
function populateForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if(savedMessage){
        formData = JSON.parse(savedMessage);
        formData.message !== undefined ? textareaEl.value = formData.message : textareaEl.value = '';
        formData.email !== undefined ? inputEl.value = formData.email : inputEl.value = '';
    };   
};
function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    inputEl.value = '';
    textareaEl.value = '';
};