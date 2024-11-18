document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticketForm');
    const submitBtn = document.querySelector('.submit-btn');
    const notificationIcon = document.querySelector('#notification-bell');

    // Micro-interaction 1: Button hover effect (CSS handles this)

    // Micro-interaction 2: Form submission animation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBtn.innerHTML = '⟳ Sending...';
        submitBtn.classList.add('loading');
        
        setTimeout(() => {
            submitBtn.innerHTML = '✓ Submitted!';
            submitBtn.classList.remove('loading');
            form.reset();
        }, 2000);
    });

    // Micro-interaction 3: Notification icon click effect
    notificationIcon.addEventListener('click', () => {
        alert('You have no notifications!');
    });
});