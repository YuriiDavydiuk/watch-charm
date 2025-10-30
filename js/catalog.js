const showMoreBtn = document.querySelector(".catalog-btn");
const hiddenItems = document.querySelectorAll(".hidden-mob");

showMoreBtn.addEventListener("click", () => {
  hiddenItems.forEach(item => item.style.display = "block");
  showMoreBtn.style.display = "none"; // або замінити текст на "Згорнути"
});
