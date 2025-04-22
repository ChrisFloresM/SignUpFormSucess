'use strict'

const subscribeButton = document.querySelector('.btn.signup__info-submit');
const dismissButton = document.querySelector('.btn.dismiss-btn');

const components = document.querySelectorAll('.component');
const form = document.querySelector('.signup__info-form');
const inputEmail = document.getElementById('input-email');

const userEmailTxt = document.querySelector('.user-email');

init();

function init() {
	/* Cleanup input field */
	inputEmail.value = '';

	/* Setup event listeners */
	form.addEventListener('submit', formListener);
	dismissButton.addEventListener('click', formListener);
	inputEmail.addEventListener('input', emailValidationListener);

	/* Set initial empty value error */
	if (inputEmail.validity.valueMissing) {
		inputEmail.setCustomValidity("Please enter an email address here");
	}
}


/* ================= Listener callbacks ================= */
function formListener(e) {
	e.preventDefault();

	components.forEach(component => component.classList.toggle('hidden'));
	userEmailTxt.textContent = inputEmail.value;

	/* Reset to default state */
	subscribeButton.classList.remove('valid-data');
	inputEmail.value = '';
}

function emailValidationListener(e) {
	e.preventDefault();

	if (inputEmail.validity.valueMissing) {
		inputEmail.setCustomValidity("Please enter an email address here");
	} else {
		inputEmail.setCustomValidity(inputEmail.validity.typeMismatch ? "Input a valid email address" : "");
	}

	if (inputEmail.checkValidity()) {
		subscribeButton.classList.add('valid-data');
	} else {
		subscribeButton.classList.remove('valid-data');
	}
}