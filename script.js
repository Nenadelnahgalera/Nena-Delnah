/* =========================================================
   MOBILE NAVIGATION
========================================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  // Toggle menu open/closed
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    updateMenuState(isOpen);
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      updateMenuState(false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton && navLinks.classList.contains("open")) {
      updateMenuState(false);
    }
  });

  // Reusable helper to keep everything in sync
  function updateMenuState(isOpen) {
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  }
}

/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
========================================================= */
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}