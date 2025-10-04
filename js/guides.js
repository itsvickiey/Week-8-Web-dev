document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const content = document.getElementById(targetId);
            
            // Toggle the 'expanded' class
            const isExpanded = content.classList.toggle('expanded');
            
            // Update button text and ARIA attribute
            if (isExpanded) {
                button.textContent = 'Show Less Details';
                button.setAttribute('aria-expanded', 'true');
            } else {
                button.textContent = 'Read More Details';
                button.setAttribute('aria-expanded', 'false');
            }
        });
    });
});