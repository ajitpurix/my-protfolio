// Add any interactive JavaScript code here if needed.
// You can also integrate animations or effects for better user experience.
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    window.addEventListener('scroll', () => {
      projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }
      });
    });
  });
  