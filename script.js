
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Active link on scroll + close mobile menu on click
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  const sections = document.querySelectorAll('section[id]');
  const setActive = () => {
    let current = sections[0].id;
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', setActive);

  // Animate skill bars when visible
  const bars = document.querySelectorAll('.bar i');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.w + '%';
        io.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => io.observe(b));
