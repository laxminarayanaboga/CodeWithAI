document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    function validateForm() {
        const firstName = document.getElementById('firstName').validity.valid;
        const lastName = document.getElementById('lastName').validity.valid;
        const email = document.getElementById('email').validity.valid;
        const phone = document.getElementById('phone').validity.valid;
        const dob = document.getElementById('dob').validity.valid && isOldEnough();
        const city = document.getElementById('city').validity.valid;
        const country = document.getElementById('country').value !== "";

        submitBtn.disabled = !(firstName && lastName && email && phone && dob && city && country);
    }

    function isOldEnough() {
        const dob = new Date(document.getElementById('dob').value);
        const age = new Date().getFullYear() - dob.getFullYear();
        return age >= 18;
    }

    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
        validateForm();
    });
});