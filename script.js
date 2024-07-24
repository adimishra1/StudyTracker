document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    // For demonstration purposes, use a simple username/password check
    // In a real application, use secure server-side authentication
    if (username === 'user' && password === 'pass') {
        // Hide login form and show main content
        document.getElementById('login-container').style.display = 'none';
        const mainContent = document.querySelectorAll('#main-content');
        mainContent.forEach(content => content.style.display = 'block');
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
});
