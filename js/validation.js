// Function to validate the email format using a simple regex
function isValidEmail(email) {
    // Basic regex pattern for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

// Function to display an error message
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId + '-error');
    const inputElement = document.getElementById(elementId);
    
    inputElement.classList.add('error');
    errorElement.textContent = message;
}

// Function to clear an error message
function clearError(elementId) {
    const errorElement = document.getElementById(elementId + '-error');
    const inputElement = document.getElementById(elementId);
    
    inputElement.classList.remove('error');
    errorElement.textContent = '';
}

// Main validation function
function validateForm() {
    let isValid = true;
    
    // Clear previous status and errors
    document.getElementById('form-status').textContent = '';
    ['name', 'email', 'message'].forEach(clearError);

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // 1. Name Validation (Required Field)
    if (name === '') {
        displayError('name', 'Name is required.');
        isValid = false;
    }

    // 2. Email Validation (Required Field and Format)
    if (email === '') {
        displayError('email', 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    // 3. Message Validation (Required Field)
    if (message === '') {
        displayError('message', 'A message is required.');
        isValid = false;
    }
    
    return isValid;
}


// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const statusMessage = document.getElementById('form-status');
    
    // Prevent default form submission
    event.preventDefault(); 

    if (validateForm()) {
        // If validation passes:
        
        // 1. Display success message
        statusMessage.textContent = 'Thank you! Your message has been sent.';
        statusMessage.style.backgroundColor = '#d4edda'; // Light green
        statusMessage.style.color = '#155724'; // Dark green text

        // 2. In a real application, you would send the data here (e.g., using fetch API)
        // For this static project, we just log and reset.
        console.log('Form data is valid. Ready to submit!');
        
        // 3. Reset the form fields
        this.reset();

    } else {
        // If validation fails:
        statusMessage.textContent = 'Please correct the errors above.';
        statusMessage.style.backgroundColor = '#f8d7da'; // Light red
        statusMessage.style.color = '#721c24'; // Dark red text
    }
});