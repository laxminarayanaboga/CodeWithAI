document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    const validateField = (field) => {
        const errorMessage = document.getElementById(`${field.name}Error`);
        if (!field.validity.valid || (field.type === "date" && !isDateValid(field.value))) {
            errorMessage.textContent = getErrorMessage(field);
            return false;
        } else {
            errorMessage.textContent = '';
            return true;
        }
    };

    const isDateValid = (dobValue) => {
        const dob = new Date(dobValue);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        return age >= 18;
    };

    const getErrorMessage = (field) => {
        if (field.validity.valueMissing) {
            return 'This field is required.';
        } else if (field.validity.patternMismatch) {
            return 'Invalid format.';
        } else if (field.type === 'email' && field.validity.typeMismatch) {
            return 'Please enter a valid email.';
        } else if (field.type === 'date' && !isDateValid(field.value)) {
            return 'You must be at least 18 years old.';
        }
        return '';
    };

    const validateForm = () => {
        const inputs = form.querySelectorAll('input, select, textarea');
        const allValid = Array.from(inputs).every((input) => validateField(input));
        submitBtn.disabled = !allValid;
    };

    form.addEventListener('input', validateForm);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
        validateForm(); // Reset button state
    });
});