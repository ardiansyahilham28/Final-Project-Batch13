document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelectorAll('.project').forEach(project => {
    const projectLink = project.querySelector('a');
    projectLink.addEventListener('click', () => {
        project.classList.toggle('active');
    });
});

 //humberger menu
 const menuToggle = document.querySelector(".menu-toggle");
 const navbar = document.querySelector(".navbar");

 //event listener untuk tombol hamburger
 menuToggle.addEventListener("click", function () {
     // Toggle class "active" pada menu untuk menampilkan/sembunyikan menu
     navbar.classList.toggle("active");
 });
  
 