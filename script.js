document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    let formMessage = document.getElementById('form-message');
    
    if(name && email && message) {
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});
