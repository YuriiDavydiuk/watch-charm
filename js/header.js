const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header-menu-link");

// Функція для встановлення активного класу
function setActiveLink(id) {
  navLinks.forEach(link => {
    link.classList.toggle("current", link.getAttribute("href") === `#${id}`);
  });
}

// Налаштування Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // 60% елемента має бути видно
  }
);

// Спостерігати за кожним розділом
sections.forEach(section => observer.observe(section));