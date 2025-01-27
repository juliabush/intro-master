const form = document.getElementById('form');
const password = document.getElementById('pword');

form.addEventListener('submit', function(e) {
    let messages = [];

    if (password.value.length > 16) {
        messages.push('Password cannot be longer than 16 characters');
    }
    if (password.value.length < 6) {
        messages.push('Password must be longer than 6 characters');
    }

    if (messages.length > 0) {
        e.preventDefault(); // Prevent form submission
        alert(messages.join('\n')); // Display error messages
    }
});
