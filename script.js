const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const topbar = document.querySelector(".topbar");

if (menuToggle && topbar) {
  let closeTimer;
  const closeMenu = () => {
    if (!topbar.classList.contains("menu-open")) return;
    topbar.classList.add("menu-closing");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    const closeDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;
    closeTimer = window.setTimeout(() => {
      topbar.classList.remove("menu-open", "menu-closing");
    }, closeDelay);
  };

  menuToggle.addEventListener("click", () => {
    if (topbar.classList.contains("menu-open") && !topbar.classList.contains("menu-closing")) {
      closeMenu();
      return;
    }
    window.clearTimeout(closeTimer);
    topbar.classList.remove("menu-closing");
    topbar.classList.add("menu-open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
  });

  topbar.querySelectorAll(".primary-nav a, .news-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
