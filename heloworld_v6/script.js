document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');
    const countries = [
        "United States", "Canada", "Australia", "United Kingdom", "Germany", 
        "France", "Italy", "Spain", "Portugal", "Sweden", 
        "Netherlands", "Belgium", "Switzerland", "Norway", "Finland", 
        "Denmark", "Ireland", "Austria", "New Zealand", "Japan", 
        "China", "India", "Brazil", "South Africa", "Mexico", 
        // Add more countries as needed
    ];

    // Populate the country select input
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Here you can handle the form submissions, like sending via AJAX
        
        // Show success message
        successMessage.textContent = "Your message has been sent successfully!";
        successMessage.classList.remove('hidden');

        // Reset the form
        contactForm.reset();
    });
});