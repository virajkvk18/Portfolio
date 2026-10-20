/**
 * VIRAJ KUMAR VISHWAKARMA — GRAPHIC DESIGN PORTFOLIO INTERACTIVITY
 */

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlideshow();
  initImageLightboxModal();
  initDesignLab();
  initShareButton();
  initDesignContactForm();
  initMobileNav();
});

// Toast notification helper
function showToast(message) {
  let toast = document.querySelector(".toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> ${message}`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// 1. Hero Auto-Cycling Work Showcase Slideshow
function initHeroSlideshow() {
  const container = document.querySelector(".hero-slideshow");
  if (!container) return;

  const slides = container.querySelectorAll(".slideshow-img");
  if (!slides.length) return;

  const counter = document.querySelector(".slideshow-counter");
  const progressBar = container.querySelector(".slideshow-progress-bar");
  const dotsContainer = document.querySelector(".slideshow-dots");
  const pauseBtn = document.querySelector(".slideshow-pause-btn");

  let currentIndex = 0;
  let isPlaying = true;
  let timer = null;
  const slideDuration = 2200; // ms (smooth 2.2s pacing)

  // Generate interactive dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((slide, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `slideshow-dot ${idx === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Jump to slide ${idx + 1}`);
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(idx);
        restartTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer ? dotsContainer.querySelectorAll(".slideshow-dot") : [];

  function updateCounter() {
    if (counter) {
      const cur = String(currentIndex + 1).padStart(2, "0");
      const tot = String(slides.length).padStart(2, "0");
      counter.textContent = `${cur} / ${tot}`;
    }
  }

  function startProgressBar() {
    if (!progressBar) return;
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    void progressBar.offsetWidth; // Force layout recalculation
    if (isPlaying) {
      progressBar.style.transition = `width ${slideDuration}ms linear`;
      progressBar.style.width = "100%";
    }
  }

  function goToSlide(targetIndex) {
    slides[currentIndex].classList.remove("active");
    if (dots[currentIndex]) dots[currentIndex].classList.remove("active");

    currentIndex = (targetIndex + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");

    updateCounter();
    startProgressBar();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function startTimer() {
    stopTimer();
    if (!isPlaying) return;
    startProgressBar();
    timer = setInterval(nextSlide, slideDuration);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (progressBar) {
      const computedWidth = window.getComputedStyle(progressBar).width;
      progressBar.style.transition = "none";
      progressBar.style.width = computedWidth;
    }
  }

  function restartTimer() {
    stopTimer();
    if (isPlaying) {
      startTimer();
    }
  }

  // Play / Pause Toggle Button
  if (pauseBtn) {
    pauseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isPlaying = !isPlaying;
      pauseBtn.textContent = isPlaying ? "⏸" : "▶";
      pauseBtn.setAttribute("aria-label", isPlaying ? "Pause slideshow" : "Play slideshow");
      if (isPlaying) {
        startTimer();
      } else {
        stopTimer();
      }
    });
  }

  // Hover pauses playback
  container.addEventListener("mouseenter", () => {
    if (isPlaying) stopTimer();
  });

  // Mouse leave resumes playback
  container.addEventListener("mouseleave", () => {
    if (isPlaying) restartTimer();
  });

  // Clicking on image advances to next slide immediately
  container.addEventListener("click", () => {
    nextSlide();
    if (isPlaying) restartTimer();
  });

  // Initial display setup
  updateCounter();
  startTimer();
}

// 2. Fullscreen Image Lightbox Modal
function initImageLightboxModal() {
  const modal = document.querySelector("#imageLightboxModal");
  if (!modal) return;

  const modalImg = document.querySelector("#lightboxImg");
  const modalTitle = document.querySelector("#lightboxTitle");
  const modalTag = document.querySelector("#lightboxTag");
  const closeBtn = modal.querySelector(".lightbox-close-btn");
  const backdrop = modal.querySelector(".lightbox-backdrop");

  function openLightbox(src, title, tag) {
    if (!src) return;
    modalImg.src = src;
    modalImg.alt = title || "Design Preview";
    if (modalTitle) modalTitle.textContent = title || "Design Showcase";
    if (modalTag) modalTag.textContent = tag || "High-Res Collateral";
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.setAttribute("hidden", "");
    if (modalImg) modalImg.src = "";
    document.body.style.overflow = "";
  }

  // Work Glimpse Cards
  document.querySelectorAll(".glimpse-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".glimpse-img-wrap img");
      const title = card.querySelector(".glimpse-title")?.textContent?.trim();
      const tag = card.querySelector(".glimpse-badge-pill")?.textContent?.trim() || "Work Glimpse";
      if (img) openLightbox(img.src, title, tag);
    });
  });

  // YouTube Thumbnail Cards
  document.querySelectorAll(".yt-thumb-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".yt-thumb-wrapper img");
      const title = card.querySelector(".thumb-details strong")?.textContent?.trim();
      const tag = card.querySelector(".thumb-details span")?.textContent?.trim() || "YouTube Thumbnail";
      if (img) openLightbox(img.src, title, tag);
    });
  });

  // Figma Workspace Cards
  document.querySelectorAll(".figma-crop-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".figma-crop-img-wrap img");
      const title = card.querySelector(".figma-crop-info strong")?.textContent?.trim();
      const tag = card.querySelector(".figma-crop-info span")?.textContent?.trim() || "Figma Workspace Asset";
      if (img) openLightbox(img.src, title, tag);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
      closeLightbox();
    }
  });
}

// 4. Interactive Design & Typography Lab
function initDesignLab() {
  const input = document.querySelector("#labTextInput");
  const stageText = document.querySelector("#labStageText");
  const stage = document.querySelector(".lab-preview-stage");
  const fontBtns = document.querySelectorAll("[data-lab-font]");
  const colorBtns = document.querySelectorAll("[data-lab-color]");

  if (!input || !stageText || !stage) return;

  // Text change
  input.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    stageText.textContent = val.length ? val : "DESIGN SYSTEMS";
  });

  // Fonts
  const fonts = {
    syne: "'Syne', sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    mono: "'JetBrains Mono', monospace",
    display: "'Inter Tight', sans-serif"
  };

  fontBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      fontBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.dataset.labFont;
      if (fonts[key]) {
        stageText.style.fontFamily = fonts[key];
      }
    });
  });

  // Color Schemes
  const colorSchemes = {
    electric: { bg: "#0d0e10", text: "#4f64ff", sub: "#c7ff4a" },
    acid: { bg: "#161b0c", text: "#c7ff4a", sub: "#f5f2e9" },
    coral: { bg: "#24100c", text: "#ff583b", sub: "#fcd34d" },
    monochrome: { bg: "#f5f2e9", text: "#0d0e10", sub: "#52525b" }
  };

  colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      colorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const scheme = colorSchemes[btn.dataset.labColor];
      if (scheme) {
        stage.style.background = scheme.bg;
        stageText.style.color = scheme.text;
        const sub = stage.querySelector(".lab-stage-subtext");
        if (sub) {
          sub.style.color = scheme.sub;
          sub.style.borderColor = "rgba(255,255,255,0.15)";
        }
      }
    });
  });
}

// 5. Share Button (Copies portfolio link)
function initShareButton() {
  const shareButtons = document.querySelectorAll(".btn-share-link");
  shareButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const shareUrl = "https://viraj-pi.vercel.app/virajgraphicdesigner";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast("Portfolio link copied: viraj-pi.vercel.app/virajgraphicdesigner");
        }).catch(() => {
          showToast(`Direct Link: ${shareUrl}`);
        });
      } else {
        showToast(`Direct Link: ${shareUrl}`);
      }
    });
  });
}

// 6. Contact Form
function initDesignContactForm() {
  const form = document.querySelector("#designInquiryForm");
  const statusEl = document.querySelector("#designFormStatus");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const projectType = formData.get("projectType") || "Graphic Design Project";
    const details = formData.get("details") || "";

    if (statusEl) {
      statusEl.className = "form-status-msg success";
      statusEl.textContent = "Thank you! Preparing your inquiry draft...";
    }

    // Direct WhatsApp and Gmail draft fallbacks
    const subject = encodeURIComponent(`Design Inquiry from ${name} [${projectType}]`);
    const body = encodeURIComponent(`Hi Viraj,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Brief:\n${details}\n\nLooking forward to hearing from you!`);
    const mailtoUrl = `mailto:virajvishwakarma672@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.open(mailtoUrl, "_blank");
      if (statusEl) {
        statusEl.textContent = "Draft opened! You can also reach me directly on WhatsApp at +91 62644 49774.";
      }
      form.reset();
    }, 800);
  });
}

// 7. Mobile Navigation Toggle
function initMobileNav() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-menu-drawer");

  if (!toggle || !drawer) return;

  function closeDrawer() {
    drawer.classList.remove("open");
    toggle.textContent = "☰";
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function openDrawer() {
    drawer.classList.add("open");
    toggle.textContent = "✕";
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Auto-close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 880 && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}
