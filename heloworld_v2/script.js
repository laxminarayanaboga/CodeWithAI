document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation before submission
    if (name && email && message) {
        // Process the form data (e.g., send to server)
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        // Display a thank you message
        document.getElementById("responseMessage").innerText = "Thank you for your message! We will get back to you soon.";
        
        // Optionally, reset the form
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
    }
});