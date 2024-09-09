// Theme Switcher Logic
const switcher = document.getElementById('theme-switcher');
const body = document.body;

switcher.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    switcher.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent Successfully!');
});
