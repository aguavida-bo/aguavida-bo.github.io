/* Agua Vida — main.js
   1) Responsive menu
   2) Hero automatic slider
   3) Product bottle rotation
   4) Bolivia-time footer year
*/

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // Mobile menu
  // -----------------------------
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // -----------------------------
  // Hero carousel
  // -----------------------------
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".dot")];
  const prev = document.querySelector(".slider-prev");
  const next = document.querySelector(".slider-next");
  const hero = document.querySelector(".hero");

  let current = 0;
  let timer = null;
  const interval = 5500;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === current);
      slide.setAttribute("aria-hidden", i === current ? "false" : "true");
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === current);
      dot.setAttribute("aria-selected", i === current ? "true" : "false");
    });
  };

  const startAutoplay = () => {
    stopAutoplay();
    timer = window.setInterval(() => showSlide(current + 1), interval);
  };

  const stopAutoplay = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  prev?.addEventListener("click", () => {
    showSlide(current - 1);
    startAutoplay();
  });

  next?.addEventListener("click", () => {
    showSlide(current + 1);
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startAutoplay();
    });
  });

  hero?.addEventListener("mouseenter", stopAutoplay);
  hero?.addEventListener("mouseleave", startAutoplay);
  hero?.addEventListener("focusin", stopAutoplay);
  hero?.addEventListener("focusout", startAutoplay);

  // Respect the user's reduced-motion setting.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    startAutoplay();
  }

  // -----------------------------
  // Whole-bottle rotation
  // -----------------------------
  const bottle = document.querySelector("#water-bottle");
  const flipButton = document.querySelector("#flip-bottle");

  flipButton?.addEventListener("click", () => {
    bottle?.classList.toggle("is-flipped");
  });

  // -----------------------------
  // Footer year in Bolivia time
  // America/La_Paz has no daylight-saving change.
  // The displayed year therefore switches at Bolivia's
  // local midnight on January 1 automatically.
  // -----------------------------
  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    const boliviaYear = new Intl.DateTimeFormat("es-BO", {
      timeZone: "America/La_Paz",
      year: "numeric"
    }).format(new Date());

    yearElement.textContent = boliviaYear;
  }
});
