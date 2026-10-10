const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loader = document.querySelector(".intro-loader");
const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const railLinks = [...document.querySelectorAll(".rail-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const enquiryForm = document.querySelector("#enquiry-form");
const formStatus = document.querySelector("#form-status");
const scrollProgress = document.querySelector(".scroll-progress");

document.querySelector("#year").textContent = new Date().getFullYear();

// Short editorial entrance sequence.
if (!reducedMotion) {
  window.addEventListener("load", () => window.setTimeout(() => loader.classList.add("done"), 720), { once: true });
  window.setTimeout(() => loader.classList.add("done"), 1500);
}

// Mobile navigation.
function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
  if (open) mobileMenu.querySelector("a").focus();
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("keydown", (event) => {
  if (menuButton.getAttribute("aria-expanded") !== "true") return;
  if (event.key === "Escape") { setMenu(false); menuButton.focus(); }
  if (event.key === "Tab") {
    const items = [menuButton, ...mobileMenu.querySelectorAll("a")];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.matchMedia("(max-width: 840px)").addEventListener("change", (event) => { if (!event.matches) setMenu(false); });

// Reveal content as it enters the viewport.
document.querySelectorAll(".section-intro, .about-snapshot, .story-card, .work-card, .capability-grid article, .achievement-board article, .journey-list article, .capability-statement, .experience-card, .studio-heading, .concept-board, .studio-details, .contact > *").forEach((element) => element.classList.add("reveal"));

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
    if (marker >= section.getBoundingClientRect().top + window.scrollY) current = section.id;
  });
  railLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function updateScrollProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
}

let scrollPending = false;
window.addEventListener("scroll", () => {
  if (scrollPending) return;
  scrollPending = true;
  requestAnimationFrame(() => { updateActiveSection(); updateScrollProgress(); scrollPending = false; });
}, { passive: true });
window.addEventListener("resize", () => { updateActiveSection(); updateScrollProgress(); });
updateActiveSection();
updateScrollProgress();

// Horizontal project deck: mouse drag, keyboard arrows, and native touch scroll.
document.querySelectorAll("[data-drag-scroll]").forEach((deck) => {
  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  deck.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0 || event.target.closest("a, button")) return;
    dragging = true;
    startX = event.clientX;
    startScroll = deck.scrollLeft;
    deck.classList.add("dragging");
    deck.setPointerCapture(event.pointerId);
  });
  deck.addEventListener("dragstart", (event) => event.preventDefault());

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
  deck.addEventListener("lostpointercapture", stopDragging);
  deck.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    deck.scrollBy({ left: event.key === "ArrowRight" ? 330 : -330, behavior: reducedMotion ? "auto" : "smooth" });
  });
});

// Explicit controls supplement drag and native touch scrolling.
const projectDeck = document.querySelector(".project-deck");
const projectCards = [...projectDeck.querySelectorAll(".work-card")];
const deckControls = document.createElement("div");
deckControls.className = "deck-controls";
deckControls.innerHTML = '<button type="button" aria-label="Previous project">←</button><button type="button" aria-label="Next project">→</button><span class="deck-count" aria-live="polite"></span><div class="deck-track" aria-hidden="true"><span></span></div>';
projectDeck.after(deckControls);
const [previousProject, nextProject] = deckControls.querySelectorAll("button");
const projectStep = () => projectCards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(projectDeck).gap || 0);
function moveProject(direction) { projectDeck.scrollBy({ left: direction * projectStep(), behavior: reducedMotion ? "auto" : "smooth" }); }
previousProject.addEventListener("click", () => moveProject(-1));
nextProject.addEventListener("click", () => moveProject(1));
function updateDeck() {
  const max = projectDeck.scrollWidth - projectDeck.clientWidth;
  const atEnd = projectDeck.scrollLeft >= max - 2;
  const current = atEnd ? projectCards.length : Math.min(projectCards.length, Math.round(projectDeck.scrollLeft / projectStep()) + 1);
  previousProject.disabled = projectDeck.scrollLeft <= 2;
  nextProject.disabled = atEnd;
  deckControls.querySelector(".deck-count").textContent = `${String(current).padStart(2, "0")} / ${projectCards.length}`;
  deckControls.querySelector(".deck-track span").style.width = `${current / projectCards.length * 100}%`;
}
projectDeck.addEventListener("scroll", updateDeck, { passive: true });
window.addEventListener("resize", updateDeck);
updateDeck();

document.querySelectorAll(".palette-picker button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".concept-board").dataset.palette = button.dataset.color;
    document.querySelectorAll(".palette-picker button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  });
});
const motionToggle = document.querySelector(".motion-toggle");
if (reducedMotion) { motionToggle.textContent = "Reduced motion enabled"; motionToggle.disabled = true; }
else motionToggle.addEventListener("click", () => {
  const paused = document.body.classList.toggle("motion-paused");
  motionToggle.setAttribute("aria-pressed", String(paused));
  motionToggle.innerHTML = paused ? 'Resume motion <span>▶</span>' : 'Pause motion <span>Ⅱ</span>';
});

// Restrained hero depth on desktop pointers.
if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
  const heroName = document.querySelector(".hero-name");
  const portrait = document.querySelector(".hero-portrait");
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", (event) => {
    if (document.body.classList.contains("motion-paused")) return;
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    heroName.style.setProperty("--name-shift-x", `${x * -12}px`);
    heroName.style.setProperty("--name-shift-y", `${y * -6}px`);
    portrait.style.setProperty("--portrait-shift-x", `${x * 9}px`);
    portrait.style.setProperty("--portrait-shift-y", `${y * -5}px`);
  });
  hero.addEventListener("pointerleave", () => {
    heroName.style.setProperty("--name-shift-x", "0px");
    heroName.style.setProperty("--name-shift-y", "0px");
    portrait.style.setProperty("--portrait-shift-x", "0px");
    portrait.style.setProperty("--portrait-shift-y", "0px");
  });
}

// Gentle card stagger for grouped content.
document.querySelectorAll(".about-grid, .capability-grid, .achievement-board, .journey-list").forEach((group) => {
  [...group.children].forEach((child, index) => { child.style.transitionDelay = `${Math.min(index * 65, 220)}ms`; });
});

// Submit enquiries to Netlify Forms without leaving the portfolio.
// Draft links preserve the message on failure; a draft is never described as sent.
const gmailCompose = document.querySelector("#gmail-compose");
function updateGmailDraft() {
  const data = new FormData(enquiryForm);
  const params = new URLSearchParams({ view: "cm", fs: "1", to: "virajvishwakarma672@gmail.com", su: `Portfolio enquiry: ${data.get("enquiry-type") || "Let's collaborate"}`, body: `${data.get("message") || "Hi Viraj, I'd like to discuss a project."}\n\nFrom: ${data.get("name") || ""}\nReply to: ${data.get("email") || ""}` });
  gmailCompose.href = `https://mail.google.com/mail/?${params}`;
}
enquiryForm.addEventListener("input", updateGmailDraft);
enquiryForm.addEventListener("change", updateGmailDraft);
updateGmailDraft();
enquiryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  const submitButton = enquiryForm.querySelector('button[type="submit"]');
  if (submitButton.disabled) return;
  const originalLabel = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = "Sending enquiry… <span>↗</span>";
  formStatus.textContent = "";
  formStatus.className = "form-status";
  enquiryForm.setAttribute("aria-busy", "true");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const formData = new FormData(enquiryForm);
    const response = await fetch("/", {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });
    if (!response.ok) throw new Error("Submission failed");
    enquiryForm.reset();
    updateGmailDraft();
    formStatus.textContent = "Thanks — your enquiry has been sent. I'll get back to you soon.";
    formStatus.classList.add("success");
  } catch (error) {
    formStatus.innerHTML = 'The form could not send right now. Your message is still here. Use the Gmail draft below or <a href="mailto:virajvishwakarma672@gmail.com">your email app</a>.';
    formStatus.classList.add("error");
  } finally {
    window.clearTimeout(timeout);
    enquiryForm.removeAttribute("aria-busy");
    submitButton.disabled = false;
    submitButton.innerHTML = originalLabel;
  }
});
