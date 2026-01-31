// Reveal animation
const sections = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Active nav link
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// Button ripple animation (subtle & human)
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "all 0.35s ease";
  });
});

// Navbar shadow on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
// Pause floating animation on hover (natural feel)
const imageWrapper = document.querySelector(".image-wrapper");

if (imageWrapper) {
  imageWrapper.addEventListener("mouseenter", () => {
    imageWrapper.style.animationPlayState = "paused";
  });

  imageWrapper.addEventListener("mouseleave", () => {
    imageWrapper.style.animationPlayState = "running";
  });
}
// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
});

// Close menu on link click (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("show");
  });
});
