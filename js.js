function validateEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
    // Basic phone number validation
    var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phone);
}

function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var emailOrPhone = document.getElementById('email-or-phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var warningMessage = document.getElementById('password-warning');

    // Validate email or phone
    if (validateEmail(emailOrPhone) || validatePhoneNumber(emailOrPhone)) {
        // Email or phone is valid
    } else {
        // Invalid email or phone
        alert('Invalid email or phone number. Please enter a valid one.');
        return;
    }

    // Validate password
    if (password === confirmPassword) {
        // Passwords match, submit the form or perform further actions
        alert('Registration successful! You can proceed.');
    } else {
        // Passwords do not match, display a warning
        warningMessage.innerHTML = 'Passwords do not match. Please try again.';
    }
}