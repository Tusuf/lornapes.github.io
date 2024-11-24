// Dark mode toggle
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is already set in local storage
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the theme in local storage
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
        behavior: 'smooth', // Bu, kaydırmanın animasyonlu olmasını sağlar
        block: 'start' // Sayfanın üst kısmına hizalanacak şekilde kaydırma yapılır
    });
}

// Event listeners for navigation links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
