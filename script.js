/** @format */

function validator() {
	document.getElementById('errors').innerHTML = '';
	let id = document.getElementById('userId').value;
	let password = document.getElementById('password').value;
	let name = document.getElementById('name').value;
	let address = document.getElementById('address').value;
	let postnmb = document.form.postcode.value;
	let email = document.getElementById('email').value;
	let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

	let errors = document.getElementById('errors');

	// Check userID length
	if (id.length < 6) {
		let errName = document.createElement('p');
		errName.innerHTML = 'Käyttäjän oltava vähintään 6 merkkiä pitkä';
		errors.appendChild(errName);
	}

	// Check password
	if (password == '') {
		let errName = document.createElement('p');
		errName.innerHTML = 'Syötä salasana';
		errors.appendChild(errName);
	}

	// Check name
	if (name == '') {
		let errName = document.createElement('p');
		errName.innerHTML = 'Syötä nimi';
		errors.appendChild(errName);
	}

	// Check address
	if (address == '') {
		let errName = document.createElement('p');
		errName.innerHTML = 'Anna osoite';
		errors.appendChild(errName);
	}

	// Check if postal number is valid
	if (postnmb.length !== 5 || isNaN(postnmb)) {
		let errName = document.createElement('p');
		errName.innerHTML = 'Postinumeron on koostuttava viidestä numerosta';
		errors.appendChild(errName);
	}

	// Check email validity
	if (email == '' || !regEmail.test(email)) {
		let errName = document.createElement('p');
		errName.innerHTML = 'Anna toimiva sähköposti osoite';
		errors.appendChild(errName);
	}

	// check sex buttons
	if (document.querySelector('input[name="sex"]:checked') == null) {
		let errName = document.createElement('p');
		errName.innerHTML = 'Valitse sukupuoli';
		errors.appendChild(errName);
	}
	// check language buttons
	if (document.querySelector('input[name="lang"]:checked') == null) {
		let errName = document.createElement('p');
		errName.innerHTML = 'Valitse kieli';
		errors.appendChild(errName);
	}
}
