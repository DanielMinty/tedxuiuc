document.addEventListener("DOMContentLoaded", () => {
  wireSmoothAnchors();
  interceptForm();
  setupMobileMenu();
});

function setupMobileMenu() {
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.mobile-menu-btn');
  
  if (!nav || !btn) return;
  
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('nav-open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
        nav.classList.remove('nav-open');
    }
  });

  // Close menu when clicking a link
  const links = nav.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
    });
  });
}



function wireSmoothAnchors() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href")?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function interceptForm() {
  const form = document.querySelector(".form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const button = form.querySelector("button[type=submit]");
    if (button) {
      button.textContent = "Thanks for your interest!";
      button.disabled = true;
    }
  });
}



