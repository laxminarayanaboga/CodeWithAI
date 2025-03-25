document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    const validateForm = () => {
        let isValid = true;

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const dob = document.getElementById('dob');
        const city = document.getElementById('city');
        const country = document.getElementById('country');

        // Validate First Name
        const firstNameError = document.getElementById('firstNameError');
        firstNameError.textContent = "";
        if (!/^[A-Za-z]{2,50}$/.test(firstName.value)) {
            isValid = false;
            firstNameError.textContent = "First Name must be 2-50 characters and contain no numbers/special characters.";
        }

        // Validate Last Name
        const lastNameError = document.getElementById('lastNameError');
        lastNameError.textContent = "";
        if (!/^[A-Za-z]{2,50}$/.test(lastName.value)) {
            isValid = false;
            lastNameError.textContent = "Last Name must be 2-50 characters and contain no numbers/special characters.";
        }

        // Validate Email
        const emailError = document.getElementById('emailError');
        emailError.textContent = "";
        if (!/\S+@\S+\.\S+/.test(email.value)) {
            isValid = false;
            emailError.textContent = "Invalid email format.";
        }

        // Validate Phone Number
        const phoneError = document.getElementById('phoneError');
        phoneError.textContent = "";
        if (!/^\\+\\d{1,4}\\d{7,}$/.test(phone.value)) {
            isValid = false;
            phoneError.textContent = "Phone Number must be a valid international format.";
        }

        // Validate Date of Birth
        const dobError = document.getElementById('dobError');
        dobError.textContent = "";
        const dobDate = new Date(dob.value);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();

        if (
            age < 18 || 
            (age === 18 && (today.getMonth() < dobDate.getMonth() || (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())))
        ) {
            isValid = false;
            dobError.textContent = "You must be at least 18 years old.";
        }

        // Validate City
        const cityError = document.getElementById('cityError');
        cityError.textContent = "";
        if (city.value.length < 2 || city.value.length > 100) {
            isValid = false;
            cityError.textContent = "City must be 2-100 characters.";
        }

        // Validate Country
        const countryError = document.getElementById('countryError');
        countryError.textContent = "";
        if (country.value === "") {
            isValid = false;
            countryError.textContent = "Please select your country.";
        }

        submitBtn.disabled = !isValid;
    };

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!submitBtn.disabled) {
            alert('Form submitted successfully.');
            form.reset();
            validateForm(); // Recheck validation for enabling/disabling button after reset
        }
    });
});