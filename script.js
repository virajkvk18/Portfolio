const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loader = document.querySelector(".intro-loader");
const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const railLinks = [...document.querySelectorAll(".rail-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];

document.querySelector("#year").textContent = new Date().getFullYear();

// Short editorial entrance sequence.
if (!reducedMotion) {
  window.addEventListener("load", () => window.setTimeout(() => loader.classList.add("done"), 1250), { once: true });
  window.setTimeout(() => loader.classList.add("done"), 2400);
}

// Mobile navigation.
function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// Reveal content as it enters the viewport.
document.querySelectorAll(".section-intro, .story-card, .work-card, .capability-grid article, .journey-list article, .capability-statement, .contact > *").forEach((element) => element.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -35px" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Keep the compact rail synchronized with the visible section.
function updateActiveSection() {
  const marker = window.scrollY + window.innerHeight * 0.42;
  let current = sections[0]?.id || "about";
  sections.forEach((section) => {
    if (marker >= section.offsetTop) current = section.id;
  });
  railLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}

window.addEventListener("scroll", updateActiveSection, { passive: true });
updateActiveSection();

// Horizontal project deck: mouse drag, keyboard arrows, and native touch scroll.
document.querySelectorAll("[data-drag-scroll]").forEach((deck) => {
  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  deck.addEventListener("pointerdown", (event) => {
    if (event.target.closest("a")) return;
    dragging = true;
    startX = event.clientX;
    startScroll = deck.scrollLeft;
    deck.classList.add("dragging");
    deck.setPointerCapture(event.pointerId);
  });

  deck.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    deck.scrollLeft = startScroll - (event.clientX - startX) * 1.25;
  });

  function stopDragging(event) {
    if (!dragging) return;
    dragging = false;
    deck.classList.remove("dragging");
    if (event.pointerId !== undefined && deck.hasPointerCapture(event.pointerId)) deck.releasePointerCapture(event.pointerId);
  }

  deck.addEventListener("pointerup", stopDragging);
  deck.addEventListener("pointercancel", stopDragging);
  deck.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    deck.scrollBy({ left: event.key === "ArrowRight" ? 330 : -330, behavior: reducedMotion ? "auto" : "smooth" });
  });
});

// Cursor treatment and restrained hero depth on desktop pointers.
const cursor = document.querySelector(".cursor-orb");
if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }, { passive: true });

  document.querySelectorAll("a, button, .work-card, .story-card").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("hovering"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("hovering"));
  });

  const heroName = document.querySelector(".hero-name");
  const portrait = document.querySelector(".hero-portrait");
  document.querySelector(".hero").addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    heroName.style.transform = `translate(${x * -10}px, ${y * -5}px) scaleX(1.01)`;
    portrait.style.marginLeft = `${x * 7}px`;
    portrait.style.marginBottom = `${y * -4}px`;
  });
}

// Gentle card stagger for grouped content.
document.querySelectorAll(".about-grid, .capability-grid, .journey-list").forEach((group) => {
  [...group.children].forEach((child, index) => { child.style.transitionDelay = `${Math.min(index * 65, 220)}ms`; });
});
