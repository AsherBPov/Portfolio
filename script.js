const revealElements = document.querySelectorAll('.reveal');
const fileInput = document.getElementById('resumeUpload');
const filePreview = document.getElementById('filePreview');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

if (fileInput && filePreview) {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    filePreview.textContent = file ? `Selected file: ${file.name}` : 'No file selected yet.';
  });
}

// Smooth floating accent effect
const heroPanel = document.querySelector('.hero-panel');
if (heroPanel) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 14;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    heroPanel.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
