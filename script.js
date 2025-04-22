document.addEventListener('DOMContentLoaded', function() {
    const viewProjectsBtn = document.getElementById('viewProjectsBtn');
    const projectsSection = document.getElementById('projects');

    if (viewProjectsBtn && projectsSection) {
        viewProjectsBtn.addEventListener('click', function() {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // You can add more JavaScript actions here, like form submission handling,
    // dynamic content loading, animations, etc.
});