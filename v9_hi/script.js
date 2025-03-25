document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a message based on form submission
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `Thank you, ${name}! Your message has been received.`;
    
    // Optionally, clear the form fields
    this.reset();
});