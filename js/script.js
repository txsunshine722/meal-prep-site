const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();

		if (!contactForm.checkValidity()) {
			formStatus.textContent = "Please complete all required fields before sending.";
			formStatus.style.color = "#b3261e";
			contactForm.reportValidity();
			return;
		}

		formStatus.textContent = "Thanks! Your message has been sent.";
		formStatus.style.color = "#0b5d2a";
		contactForm.reset();
	});
}
