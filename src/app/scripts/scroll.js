if (typeof window !== 'undefined') {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-onScroll');
    elements.forEach(el => observer.observe(el));
  });
} 