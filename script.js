// menu
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");

menuBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
});

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

// settings
const settingBtn = document.querySelector(".setting-btn");
const themeBtn = document.querySelector(".theme-btn");
const topBtn = document.querySelector(".top-btn");
const downBtn = document.querySelector(".down-btn");

settingBtn.addEventListener("click", () => {
    themeBtn.classList.toggle("open");
    topBtn.classList.toggle("open");
    downBtn.classList.toggle("open");
});

// dark/light theme
const themeCheckBox = document.querySelector(".theme-checkbox");
const menuLinkTheme = document.querySelectorAll(".menu-link");
const aboutTheme = document.querySelector("#about");
const featureTheme = document.querySelector("#features");
const searchInputTheme = document.querySelector(".search-input");
const searchBtnTheme = document.querySelector(".search-btn");
const contactTheme = document.querySelector("#contacts");
const contactLinkTheme = document.querySelectorAll(".contact-link");

themeCheckBox.addEventListener("change", () => {
  document.body.classList.toggle("light");
  menuNav.classList.toggle("light");
  menuLinkTheme.forEach((item) => item.classList.toggle("light"));
  aboutTheme.classList.toggle("light");
  profileBtn.classList.toggle("light");
  objBtn.classList.toggle("light");
  edBtn.classList.toggle("light");
  techBtn.classList.toggle("light");
  featureTheme.classList.toggle("light");
  searchInputTheme.classList.toggle("light");
  searchBtnTheme.classList.toggle("light");
  contactTheme.classList.toggle("light");
  contactLinkTheme.forEach((item) => item.classList.toggle("light"));
  topBtn.classList.toggle("light");
  downBtn.classList.toggle("light");
});