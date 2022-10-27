// profile
const profileBtn = document.querySelector(".profile-btn");
const profile = document.querySelector(".profile");
const objBtn = document.querySelector(".obj-btn");
const obj = document.querySelector(".obj");
const edBtn = document.querySelector(".ed-btn");
const ed = document.querySelector(".ed");
const techBtn = document.querySelector(".tech-btn");
const tech = document.querySelector(".tech");

profileBtn.addEventListener("click", () => {
  profile.classList.toggle("open");
  objBtn.classList.add("click");
  edBtn.classList.remove("click");
  techBtn.classList.remove("click");
  obj.classList.add("open");
  ed.classList.remove("open");
  tech.classList.remove("open");
});
objBtn.addEventListener("click", () => {
  objBtn.classList.add("click");
  edBtn.classList.remove("click");
  techBtn.classList.remove("click");
  obj.classList.add("open");
  ed.classList.remove("open");
  tech.classList.remove("open");
});
edBtn.addEventListener("click", () => {
  objBtn.classList.remove("click");
  edBtn.classList.add("click");
  techBtn.classList.remove("click");
  obj.classList.remove("open");
  ed.classList.add("open");
  tech.classList.remove("open");
});
techBtn.addEventListener("click", () => {
  objBtn.classList.remove("click");
  edBtn.classList.remove("click");
  techBtn.classList.add("click");
  obj.classList.remove("open");
  ed.classList.remove("open");
  tech.classList.add("open");
});

// dark/light theme
const themeCheckBox = document.querySelector(".theme-checkbox");
const menuLink = document.querySelectorAll(".menu-link");
const topBtn = document.querySelector(".top-btn");
const downBtn = document.querySelector(".down-btn");
const about = document.querySelector("#about");
const feature = document.querySelector("#features");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const projectCard = document.querySelectorAll(".project-card");
const contact = document.querySelector("#contacts");
const contactLink = document.querySelectorAll(".contact-link");

themeCheckBox.addEventListener("change", () => {
  document.body.classList.toggle("light");
  menuLink.forEach((item) => item.classList.toggle("light"));
  about.classList.toggle("light");
  profileBtn.classList.toggle("light");
  objBtn.classList.toggle("light");
  obj.classList.toggle("light");
  edBtn.classList.toggle("light");
  ed.classList.toggle("light");
  techBtn.classList.toggle("light");
  tech.classList.toggle("light");
  feature.classList.toggle("light");
  searchInput.classList.toggle("light");
  searchBtn.classList.toggle("light");
  projectCard.forEach((item) => item.classList.toggle("light"));
  contact.classList.toggle("light");
  contactLink.forEach((item) => item.classList.toggle("light"));
  topBtn.classList.toggle("light");
  downBtn.classList.toggle("light");
});
