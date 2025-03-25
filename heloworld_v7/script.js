document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        message: document.getElementById('message').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
    };

    // Here you can process the form data as needed, for example:
    console.log('Form submitted:', formData);

    // Optionally, you can show a success message
    alert('Thank you for your message, ' + formData.firstName + '!');
});