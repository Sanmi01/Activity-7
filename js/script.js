const header = document.getElementsByTagName("header");
const navBtn = document.getElementById("nav-btn");
const headerBtn = document.querySelector(".header-btn");

headerBtn.addEventListener("click", () => {
  header[0].classList.toggle("show");
});
navBtn.addEventListener("click", () => {
  header[0].classList.toggle("show");
});
