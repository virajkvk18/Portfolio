const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.querySelector("#site-header");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobile-nav");

document.querySelector("#year").textContent = new Date().getFullYear();

// Compact navigation and section state.
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".desktop-nav a")];

function updateNavigation() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  const marker = window.scrollY + window.innerHeight * 0.35;
  let current = "";
  sections.forEach((section) => {
    if (marker >= section.offsetTop) current = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}

window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();

// Accessible mobile navigation.
function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileNav.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// Scroll entrances.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Rotating hero verb.
const wordElement = document.querySelector(".gradient-word");
const words = wordElement.dataset.words.split(",");
let wordIndex = 0;
if (!reducedMotion) {
  setInterval(() => {
    wordElement.classList.add("switching");
    window.setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      wordElement.textContent = words[wordIndex];
      wordElement.classList.remove("switching");
    }, 260);
  }, 2500);
}

// Count résumé metrics when they enter the viewport.
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";
    if (reducedMotion) {
      counter.textContent = `${target}${suffix}`;
    } else {
      const started = performance.now();
      const duration = 1300;
      function tick(now) {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    observer.unobserve(counter);
  });
}, { threshold: 0.7 });

document.querySelectorAll(".counter").forEach((counter) => counterObserver.observe(counter));

// Interactive skill terminal.
const skillTabs = [...document.querySelectorAll(".skill-tab")];
const skillPanels = [...document.querySelectorAll(".skill-panel")];

function selectSkill(tab) {
  const id = tab.dataset.skill;
  skillTabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  skillPanels.forEach((panel) => {
    const selected = panel.id === `skill-${id}`;
    panel.hidden = !selected;
    panel.classList.toggle("active", selected);
  });
}

skillTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectSkill(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
    const next = skillTabs[(index + direction + skillTabs.length) % skillTabs.length];
    selectSkill(next);
    next.focus();
  });
});

// Soft cursor light and magnetic actions for pointer devices.
const cursorGlow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }, { passive: true });

  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left - bounds.width / 2) * 0.14;
      const y = (event.clientY - bounds.top - bounds.height / 2) * 0.14;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
    element.addEventListener("pointerleave", () => { element.style.transform = ""; });
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const rx = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4;
      const ry = ((event.clientX - bounds.left) / bounds.width - 0.5) * 4;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// Lightweight constellation animation behind the hero.
const canvas = document.querySelector("#particle-field");
const context = canvas.getContext("2d");
let particles = [];
let animationFrame;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.min(65, Math.max(24, Math.floor(window.innerWidth / 24)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16,
    size: Math.random() * 1.4 + 0.4
  }));
}

function drawParticles() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
    if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;
    context.beginPath();
    context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
    context.fillStyle = "rgba(184,255,61,.34)";
    context.fill();

    for (let next = index + 1; next < particles.length; next += 1) {
      const other = particles[next];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 115) {
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(92,225,230,${(1 - distance / 115) * 0.08})`;
        context.stroke();
      }
    }
  });
  animationFrame = requestAnimationFrame(drawParticles);
}

resizeCanvas();
if (!reducedMotion) drawParticles();
window.addEventListener("resize", () => {
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  if (!reducedMotion) drawParticles();
}, { passive: true });
