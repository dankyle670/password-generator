
document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://password-generator-back.netlify.app/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
            mode: 'cors', // Explicitly enable CORS
        });

        const data = await response.json();

        const messageElement = document.getElementById('response-message');
        if (response.ok) {
            messageElement.textContent = data.message;
            messageElement.className = 'success';
            // Redirect to dashboard after successful signup
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            messageElement.textContent = data.message || 'Error signing up';
            messageElement.className = 'error';
        }
    } catch (error) {
        console.error('Error during signup:', error);
        const messageElement = document.getElementById('response-message');
        messageElement.textContent = 'An unexpected error occurred';
        messageElement.className = 'error';
    }
});
