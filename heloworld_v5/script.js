document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const message = document.getElementById('message').value;

    // Simulate a successful submission
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = `Thank you, ${name}! Your message has been received.`;
    
    // Clear the form fields (optional)
    document.getElementById('contact-form').reset();
});