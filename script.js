// Add a smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add an interactive project toggle
document.querySelectorAll('.project').forEach(project => {
    const projectLink = project.querySelector('a');
    projectLink.addEventListener('click', () => {
        project.classList.toggle('active');
    });
});
