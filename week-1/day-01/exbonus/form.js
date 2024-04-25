document.addEventListener("DOMContentLoaded", function () {
	const inputs = document.querySelectorAll('input[type="text"], select');

	// Function to handle input validity
	function handleInputValidity(input) {
		const label = document.querySelector('label[for="' + input.id + '"]');
		if (input.validity.valid) {
			input.classList.remove("invalid");
			if (label) {
				label.classList.remove("invalid");
			}
		} else {
			input.classList.add("invalid");
			if (label) {
				label.classList.add("invalid");
			}
		}
	}

	// Function to filter input based on regex and handle validity
	function filterInput(input, regex) {
		input.value = input.value.replace(regex, "");
		handleInputValidity(input);
	}

	// Function to handle zipcode input
	function handleZipcodeInput() {
		const zipcode = this;
		filterInput(zipcode, /[^0-9]/g);
		if (zipcode.value.length !== 5) {
			zipcode.setCustomValidity("Invalid zipcode");
			zipcode.reportValidity();
		} else {
			zipcode.setCustomValidity("");
			handleInputValidity(zipcode);
		}
	}

	// Loop through each input and attach event listeners
	inputs.forEach(function (input) {
		input.addEventListener("invalid", function () {
			handleInputValidity(input);
		});
		input.addEventListener("input", function () {
			handleInputValidity(input);
		});
	});

	// Add event listener for firstname input
	const firstname = document.getElementById("firstname");
	firstname.addEventListener("input", function () {
		filterInput(firstname, /[^a-zA-Z]/g);
	});

	// Add event listener for lastname input
	const lastname = document.getElementById("lastname");
	lastname.addEventListener("input", function () {
		filterInput(lastname, /[^a-zA-Z]/g);
	});

	// Add event listeners for zipcode input
	const zipcode = document.getElementById("zipcode");
	zipcode.addEventListener("input", handleZipcodeInput);
	zipcode.addEventListener("change", handleZipcodeInput);

	// Add event listener for student worker checkbox
	const studentWorker = document.getElementById("studentWork");
	const jobDescription = document.getElementById("jobDescription");
	studentWorker.addEventListener("change", function () {
		if (studentWorker.checked) {
			jobDescription.setAttribute("required", "required");
		} else {
			jobDescription.removeAttribute("required");
			handleInputValidity(jobDescription);
		}
	});
});
