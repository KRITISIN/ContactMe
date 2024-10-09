document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Log data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Clear form fields
    document.getElementById('contactForm').reset();
});
