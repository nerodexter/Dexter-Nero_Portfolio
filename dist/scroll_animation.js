  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Play animation
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-10");
      } else {
        // Reset animation so it plays again
        entry.target.classList.add("opacity-0", "translate-y-10");
        entry.target.classList.remove("opacity-100", "translate-y-0");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));

