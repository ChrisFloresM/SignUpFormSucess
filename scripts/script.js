'use strict'

const subscribeButton = document.querySelector('.btn.signup__info-submit');
const dismissButton = document.querySelector('.btn.dismiss-btn');
const components = document.querySelectorAll('.component');
const form = document.querySelector('.signup__info-form');
const inputEmail = document.getElementById('input-email');
const userEmailTxt = document.querySelector('.user-email');
const bubbleError = document.querySelector('.signup__info-email-error');

init();

function init() {
	/* Cleanup input field */
	inputEmail.value = '';

	/* Setup event listeners */
	form.addEventListener('submit', formListener);
	dismissButton.addEventListener('click', dismissListener);
	inputEmail.addEventListener('input', emailValidationListener);
}

/* ================= Listener callbacks ================= */
function formListener(e) {
	e.preventDefault();

	if (!inputEmail.validity.valid) {
		displayError();
		return;
	}

	components.forEach(component => component.classList.toggle('hidden'));
	userEmailTxt.textContent = inputEmail.value;

	/* Reset to default state */
	subscribeButton.classList.remove('valid-data');
	inputEmail.value = '';
}

function emailValidationListener(e) {
	e.preventDefault();

	if (inputEmail.checkValidity()) {
		subscribeButton.classList.add('valid-data');
		bubbleError.classList.add('hidden-error');
		bubbleError.classList.remove('fade-in');
	} else {
		subscribeButton.classList.remove('valid-data');
		displayError();
	}
}

function dismissListener(e) {
	e.preventDefault();
	components.forEach(component => component.classList.toggle('hidden'));
}

/* ================= Utility functions ================= */
function displayError() {
	if (inputEmail.validity.valueMissing) {
		bubbleError.textContent = 'Please, enter an email address';
	} else if (inputEmail.validity.typeMismatch) {
		bubbleError.textContent = 'Email address needs to be a valid format';
	}

	bubbleError.classList.remove('hidden-error');
	bubbleError.classList.add('fade-in');
}