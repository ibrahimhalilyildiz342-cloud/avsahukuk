// AVAS Hukuk Bürosu Website JavaScript Code

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Send data to the server (this is a placeholder)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', handleContactForm);

// Additional functionality can be added below