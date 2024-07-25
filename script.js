document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'flex';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    // For demonstration purposes, use a simple username/password check
    // In a real application, use secure server-side authentication
    if (username === 'user' && password === 'pass') {
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
});

// Dashboard related JavaScript

document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'flex';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    // For demonstration purposes, use a simple username/password check
    // In a real application, use secure server-side authentication
    if (username === 'user' && password === 'pass') {
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
});
