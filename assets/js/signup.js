// Initialize EmailJS with public key
(function() {
    emailjs.init("KUN1cq3bdTgISYea2");
})();

// Get the form element
const signupForm = document.getElementById('signup-form');

// Add event listener for form submission
signupForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form values
    const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email_address').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        age_range: document.getElementById('age_range').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        training_goal: document.querySelector('input[name="training_goal"]:checked').value
    };
    
    // Send email using EmailJS
    emailjs.send('service_dqirnrt', 'template_7oapgbm', formData)
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