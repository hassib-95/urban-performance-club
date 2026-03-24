/* jshint esversion: 6 */
/* global emailjs */


// Initialize EmailJS with public key
emailjs.init("KUN1cq3bdTgISYea2");

// Get the form element
const signupForm = document.getElementById('signup-form');

// Add event listener for form submission
signupForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Send email directly from form using sendForm method (no eval)
    emailjs.sendForm('service_dqirnrt', 'template_7oapgbm', this)
        .then(function(response) {
            // Success message
            alert('Thank you for signing up! We will contact you soon.');
            // Reset the form
            signupForm.reset();
        }, function(error) {
            // Error message
            alert('Oops! Something went wrong. Please try again or contact us directly.');
            console.log('EmailJS Error:', error);
        });
});