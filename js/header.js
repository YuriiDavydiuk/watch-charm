const sections = document.querySelectorAll("section");
const desktopLinks = document.querySelectorAll(".header-menu-link");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

function setActiveLink(id) {
  // Для десктопного меню
  desktopLinks.forEach(link => {
    link.classList.toggle("current", link.getAttribute("href") === `#${id}`);
  });

  // Для мобільного меню
  mobileLinks.forEach(link => {
    link.classList.toggle("current", link.getAttribute("href") === `#${id}`);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id === "hero" ? "home" : entry.target.id;
        setActiveLink(id);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }
);

sections.forEach(section => observer.observe(section));