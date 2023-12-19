function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You should replace this with actual authentication logic
    // For example, send a request to a backend server for validation
    if (username === 'example' && password === 'password') {
        // Successful login
        document.getElementById('error-message').innerText = 'Login successful!';
    } else {
        // Failed login
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
}

function validateRegistration() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Perform validation, e.g., check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'Passwords do not match';
    } else {
        // You can add additional validation logic here

        // Registration successful
        document.getElementById('error-message').innerText = 'Registration successful!';
    }
}
