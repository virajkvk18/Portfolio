/**
 * VIRAJ KUMAR VISHWAKARMA — GRAPHIC DESIGN PORTFOLIO INTERACTIVITY
 */

// Project Case Study Data Store
const designProjects = [
  {
    id: "growth-square",
    category: "branding",
    title: "Growth Square Community Visual System",
    client: "Growth Square (Active Internship)",
    year: "2026",
    discipline: "Brand Identity & Community Design",
    summary: "Complete visual ecosystem for an ambitious builder community. Developed speaker cards, event banners, visual guidelines, and merchandise concepts.",
    tags: ["Figma", "Illustrator", "Brand Guidelines", "Social Assets"],
    palette: [
      { name: "Deep Ink", hex: "#0e0f11" },
      { name: "Acid Lime", hex: "#c7ff4a" },
      { name: "Electric Blue", hex: "#4f64ff" },
      { name: "Off-White", hex: "#f5f2e9" }
    ],
    typography: {
      display: "Inter Tight / Syne (Extra Bold)",
      body: "DM Sans (Medium)"
    },
    challenge: "Growth Square required an energetic yet credible visual identity that stands out in student tech and startup communities. It needed to communicate velocity, curiosity, and high craft across both digital feeds and physical event spaces.",
    solution: "Crafted a high-contrast design system centered on bold geometric badge work, technical monospaced details, and vibrant acid accents against deep obsidian backdrops. Standardized event cover templates allowed rapid 15-minute rollouts for weekly community meetups.",
    deliverables: [
      "Core Logomark & Clear Space Standards",
      "Event Announcement & Speaker Spotlight Templates",
      "Discord & WhatsApp Community Badges & Banners",
      "Physical Swag (Stickers, Member Lanyards, Tote Bags)"
    ]
  },
  {
    id: "after-hours",
    category: "posters",
    title: "After Hours Creative Gathering",
    client: "Self-Directed Concept Series",
    year: "2026",
    discipline: "Event Identity & Typographic Posters",
    summary: "An avant-garde visual world for an independent creative salon. Features stacked brutalist typography, geometric orbital artwork, and VIP pass systems.",
    tags: ["Illustrator", "Photoshop", "Typography", "Editorial Print"],
    palette: [
      { name: "Cobalt Blue", hex: "#4f64ff" },
      { name: "Acid Yellow", hex: "#c7ff4a" },
      { name: "Cream White", hex: "#f7f4eb" },
      { name: "Carbon Ink", hex: "#191a1c" }
    ],
    typography: {
      display: "Inter Tight 900 (Compressed & Outline)",
      accent: "Georgia Italic",
      body: "DM Sans Regular"
    },
    challenge: "How do you create an event identity that feels like a rare midnight gathering rather than another standard corporate conference?",
    solution: "Explored the concept of 'Ideas don't clock out'. Leveraged hyper-condensed typography, dual-color outline strokes, rotating geometric orbitals, and tangible physical artifacts like perforated boarding-pass tickets with custom barcode aesthetics.",
    deliverables: [
      "A1 Exhibition & Street Postering Series",
      "Perforated VIP Event Pass with Scannable Details",
      "Dynamic Social Teaser Grid & Story Animations",
      "Event Wristband & Physical Access Collateral"
    ]
  },
  {
    id: "manu-moms-cake",
    category: "packaging",
    title: "Manu's Mom's Cake Artisanal Packaging",
    client: "Manu's Mom's Cake (Weburate Client)",
    year: "2026",
    discipline: "Packaging & Brand Identity",
    summary: "Warm, premium bakery identity and packaging system for an artisanal confectioner. Elevated custom cakes into gift-worthy luxury centerpieces.",
    tags: ["Packaging Design", "Illustrator", "Print Finishing", "Figma"],
    palette: [
      { name: "Rich Cocoa", hex: "#2b1f1d" },
      { name: "Gold Foil", hex: "#d4af37" },
      { name: "Vanilla Cream", hex: "#fdf8f0" },
      { name: "Terracotta", hex: "#c46851" }
    ],
    typography: {
      display: "Playfair Display (Italic & Semi-Bold)",
      body: "DM Sans (Clean Modern Sans)"
    },
    challenge: "The brand made mouthwatering bespoke cakes but struggled with perception against commercial bakery franchises. The packaging needed to justify premium pricing and encourage customer unboxing photos on social media.",
    solution: "Designed kraft and matte cocoa cake boxes featuring hot-stamped gold foil seal badges, custom ribbon bands, and elegant menu cards. Integrated a scannable care-guide QR code on the box base.",
    deliverables: [
      "Artisanal Script & Serif Brand Mark",
      "Die-Cut Cake Box Wrap & Sleeve Graphics",
      "Gold Foil Sticker Seals & Tamper-Evident Tape",
      "Menu Typography & Instagram Launch Banners"
    ]
  },
  {
    id: "dabbadoc",
    category: "branding",
    title: "DabbaDoc Preventive Food Identity",
    client: "DesignTank 2026 (1st Place Winner)",
    year: "2026",
    discipline: "Product Branding & Information Design",
    summary: "Award-winning brand system and packaging label audit for an AI nutrition platform. Turns complex chemical additives into instant visual clarity.",
    tags: ["Information Design", "Branding", "UI Graphics", "Award Winner"],
    palette: [
      { name: "Safe Pine", hex: "#166534" },
      { name: "Alert Ochre", hex: "#ca8a04" },
      { name: "Hazard Red", hex: "#dc2626" },
      { name: "Clinical Light", hex: "#f0fdf4" }
    ],
    typography: {
      display: "Inter Tight (Bold 800)",
      data: "JetBrains Mono (Technical Details)"
    },
    challenge: "Food labels in India are intentionally cryptic and misleading. DabbaDoc needed a visual language that felt both trustworthy as a clinical scanner and friendly enough for daily grocery shoppers.",
    solution: "Developed the 'Traffic-Light Nutri-Card' visual grammar. Created a clean, icon-driven label overlay system with high-contrast badge indicators for ultra-processed foods, hidden sugars, and healthier regional alternatives.",
    deliverables: [
      "Startup Identity & App Icon System",
      "Nutritional Traffic-Light Visual Taxonomy",
      "Interactive Pitch Deck & Competition Presentation",
      "Social Campaign: 'Do You Know What’s in Your Dabba?'"
    ]
  },
  {
    id: "vibeshift",
    category: "posters",
    title: "VibeShift NeoType Festival",
    client: "Independent Music & Design Series",
    year: "2026",
    discipline: "Brutalist Poster & Merchandise Design",
    summary: "Experimental electronic music festival branding exploring brutalist grids, kinetic typography, screenprinted posters, and holographic ticket stubs.",
    tags: ["Photoshop", "After Effects", "Brutalist Design", "Poster"],
    palette: [
      { name: "Pitch Black", hex: "#09090b" },
      { name: "Acid Glow", hex: "#c7ff4a" },
      { name: "Cyber Chrome", hex: "#e2e8f0" },
      { name: "Neon Violet", hex: "#7c3aed" }
    ],
    typography: {
      display: "Syne 800 / Custom Glitch Types",
      mono: "JetBrains Mono Bold"
    },
    challenge: "Produce an energetic visual identity celebrating electronic music subcultures while maintaining strict legibility for 30+ artist lineup names on physical gig posters.",
    solution: "Employed a modular 12-column architectural grid with extreme typographic scale contrast. Paired distorted vector headlines with micro-monospaced stage times and metallic silver foil ticket mockups.",
    deliverables: [
      "Gig Poster Series (B1 & A2 formats)",
      "Holographic Security Foil Festival Ticket",
      "Screenprinted Merchandise (Hoodies & Totes)",
      "Lineup Announcement Carousel System"
    ]
  },
  {
    id: "purebotanic",
    category: "packaging",
    title: "PureBotanic Organic Cold Brews",
    client: "Commercial FMCG Concept",
    year: "2026",
    discipline: "Beverage Packaging & 3D Render",
    summary: "Sleek aluminum can packaging line for zero-sugar organic botanical cold brew teas. Clean Scandinavian minimalism meets vibrant flavor gradients.",
    tags: ["Packaging", "Illustrator", "Photoshop", "3D Mockup"],
    palette: [
      { name: "Sky Azure", hex: "#38bdf8" },
      { name: "Frost White", hex: "#f0f9ff" },
      { name: "Deep Marine", hex: "#0c4a6e" },
      { name: "Botanical Sage", hex: "#10b981" }
    ],
    typography: {
      display: "Syne (Geometric Sans)",
      body: "DM Sans (Minimalist)"
    },
    challenge: "Standing out on crowded retail refrigerator shelves against synthetic energy drinks and legacy iced teas with a calm, premium health proposition.",
    solution: "Utilized matte soft-touch aluminum can wraps with vertical rotational typography, tactile spot-gloss line art of botanical leaves, and fresh gradient fades indicating flavor profiles.",
    deliverables: [
      "330ml Aluminum Can Label Dipline System",
      "Spot-UV Botanical Illustration Library",
      "Retail Shipper Display Box Graphics",
      "E-Commerce Product Render Mockups"
    ]
  },
  {
    id: "learnlens-social",
    category: "social",
    title: "LearnLens Product Launch Campaign",
    client: "LearnLens (TIT Srijan Finalist)",
    year: "2026",
    discipline: "Social Media & Growth Design",
    summary: "High-converting 10-slide educational carousel series and launch banners for an AI video learning companion. Reached 15,000+ organic impressions.",
    tags: ["Figma", "Social Media", "Carousels", "Infographics"],
    palette: [
      { name: "Deep Royal", hex: "#2e1065" },
      { name: "Neon Violet", hex: "#a855f7" },
      { name: "Acid Lime", hex: "#c7ff4a" },
      { name: "Bright Pearl", hex: "#faf5ff" }
    ],
    typography: {
      display: "Inter Tight (Extra Bold)",
      body: "DM Sans (High Legibility on Mobile)"
    },
    challenge: "Explain complex AI video retrieval-augmented generation (RAG) technology to college students and educators in under 3 seconds per slide swipe.",
    solution: "Designed punchy, hook-first carousel slides featuring custom vector UI breakdowns, step-by-step problem vs solution visual comparisons, and prominent CTA cards.",
    deliverables: [
      "LinkedIn & Instagram 1080x1350 Carousel Deck",
      "Twitter / X Thread Header & Card Visuals",
      "Short-form Video Thumbnail Templates",
      "Pitch Deck Visual Graphics"
    ]
  },
  {
    id: "citypramaan",
    category: "social",
    title: "CityPramaan Public Information Design",
    client: "CityPramaan (BuildVerse Top 20)",
    year: "2026",
    discipline: "Information Design & Civic Graphics",
    summary: "Accessible civic infographics and role-based dashboard iconography making municipal road accountability data instantly digestible for everyday citizens.",
    tags: ["Information Design", "Iconography", "Figma", "Civic Tech"],
    palette: [
      { name: "Civic Navy", hex: "#0f172a" },
      { name: "Safety Amber", hex: "#f59e0b" },
      { name: "Verified Green", hex: "#10b981" },
      { name: "Paper Card", hex: "#f8fafc" }
    ],
    typography: {
      display: "Inter Tight 700",
      body: "DM Sans Medium"
    },
    challenge: "Public infrastructure contracts and repair milestones are notoriously opaque. Citizens needed intuitive visuals that clearly show who is accountable.",
    solution: "Designed a clean iconography set, road quality status badges, and simplified timeline infographics that translate technical public works data into clear graphics.",
    deliverables: [
      "Civic Status Badge & Iconography Library",
      "Public Accountability Social Infographics",
      "Citizen Inspection Poster Explainer",
      "Brand Mark & Color Contrast Accessibility Standards"
    ]
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlideshow();
  initCategoryFilter();
  initModalLightbox();
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

// 2. Category Filter
function initCategoryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;

      cards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === "all" || cardCategory === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

// 3. Modal Case Study Lightbox
function initModalLightbox() {
  const modal = document.querySelector("#caseStudyModal");
  const closeBtn = document.querySelector(".modal-close-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!modal) return;

  function openModal(projectId) {
    const project = designProjects.find(p => p.id === projectId);
    if (!project) return;

    // Fill Modal Data
    modal.querySelector(".modal-discipline-tag").textContent = project.discipline;
    modal.querySelector(".modal-year-tag").textContent = project.year;
    modal.querySelector(".modal-title-h2").textContent = project.title;
    modal.querySelector(".modal-client-val").textContent = project.client;
    modal.querySelector(".modal-brief-text").textContent = project.summary;
    modal.querySelector(".modal-challenge-text").textContent = project.challenge;
    modal.querySelector(".modal-solution-text").textContent = project.solution;

    // Typography
    modal.querySelector(".modal-typo-display").textContent = project.typography.display;
    modal.querySelector(".modal-typo-body").textContent = project.typography.body;

    // Deliverables List
    const delivList = modal.querySelector(".modal-deliverables-list");
    delivList.innerHTML = "";
    project.deliverables.forEach(item => {
      const li = document.createElement("li");
      li.style.marginBottom = "6px";
      li.style.fontSize = "13px";
      li.style.color = "var(--text-light-muted)";
      li.innerHTML = `<span style="color:var(--acid); margin-right:8px;">✦</span> ${item}`;
      delivList.appendChild(li);
    });

    // Swatches
    const swatchContainer = modal.querySelector(".palette-swatches-interactive");
    swatchContainer.innerHTML = "";
    project.palette.forEach(color => {
      const item = document.createElement("div");
      item.className = "swatch-item";
      item.setAttribute("title", `Click to copy ${color.hex}`);
      item.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="swatch-color-box" style="background:${color.hex};"></span>
          <span style="font-size:12px; color:var(--paper);">${color.name}</span>
        </div>
        <span class="swatch-hex">${color.hex} 📋</span>
      `;
      item.addEventListener("click", () => {
        navigator.clipboard.writeText(color.hex);
        showToast(`Copied ${color.name} (${color.hex})!`);
      });
      swatchContainer.appendChild(item);
    });

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      openModal(id);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
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

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    drawer.classList.toggle("open", !isOpen);
    toggle.textContent = isOpen ? "☰" : "✕";
  });

  drawer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggle.textContent = "☰";
    });
  });
}
