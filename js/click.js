const links = document.querySelectorAll(".header-menu-link");

// Функція для встановлення активного класу
function setActive(link) {
  links.forEach((l) => l.classList.remove("current"));
  link.classList.add("current");
  localStorage.setItem("currentLink", link.textContent.trim());
}

// Обробка кліку
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    setActive(this);
  });
});

// Встановлення активного пункту при завантаженні сторінки
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("currentLink");
  if (saved) {
    links.forEach((link) => {
      if (link.textContent.trim() === saved) {
        setActive(link);
      }
    });
  } else {
    // Якщо нічого не збережено — встановити перший пункт як активний
    setActive(links[0]);
  }
});
