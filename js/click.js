const links = document.querySelectorAll(".header-menu-link");

// Функція для встановлення активного класу
function setActive(link) {
  links.forEach((l) => l.classList.remove("current"));
  link.classList.add("current");
}

// Обробка кліку
links.forEach((link) => {
  link.addEventListener("click", function () {
    setActive(this);
  });
});

// Завжди активувати "Home" при завантаженні
window.addEventListener("DOMContentLoaded", () => {
  const homeLink = Array.from(links).find(link =>
    link.textContent.trim().toLowerCase() === "home"
  );
  setActive(homeLink || links[0]);
});