// menu
const menuBtn = document.querySelector(".menu-btn")
const menuNav = document.querySelector(".menu-nav")

menuBtn.addEventListener("click", menuShow);

let menuOpen = false;

function menuShow() {
  if (!menuOpen) {
    menuBtn.classList.add("click");
    menuNav.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("click");
    menuNav.classList.remove("open");
    menuOpen = false;
  }
}

// settings
const settingBtn = document.querySelector(".setting-btn");
const themeBtn = document.querySelector(".theme-btn");
const topBtn = document.querySelector(".top-btn");
const downBtn = document.querySelector(".down-btn");

settingBtn.addEventListener("click", settingShow);

let settingOpen = false;

function settingShow() {
  if (!settingOpen) {
    themeBtn.classList.add("open");
    topBtn.classList.add("open");
    downBtn.classList.add("open");
    settingOpen = true;
  } else {
    themeBtn.classList.remove("open");
    topBtn.classList.remove("open");
    downBtn.classList.remove("open");
    settingOpen = false;
  }
}

// dark/light theme
const themeCheckBox = document.querySelector(".theme-checkbox");
const menuLinkTheme = document.querySelectorAll(".menu-link");
const aboutTheme = document.querySelector("#about");
const sectionNavTheme = document.querySelector(".section-nav");
const featureTheme = document.querySelector("#features");
const searchInputTheme = document.querySelector(".search-input");
const searchBtnTheme = document.querySelector(".search-btn");
const contactTheme = document.querySelector("#contacts");
const contactLinkTheme = document.querySelectorAll(".contact-link");

themeCheckBox.addEventListener("change", themeChange);

function themeChange() {
  document.body.classList.toggle("light");
  menuNav.classList.toggle("light");
  menuLinkTheme.forEach(item => item.classList.toggle("light"));
  aboutTheme.classList.toggle("light");
  sectionNavTheme.classList.toggle("light");
  featureTheme.classList.toggle("light");
  searchInputTheme.classList.toggle("light");
  searchBtnTheme.classList.toggle("light");
  contactTheme.classList.toggle("light");
  contactLinkTheme.forEach(item => item.classList.toggle("light"));
  topBtn.classList.toggle("light");
  downBtn.classList.toggle("light");
}