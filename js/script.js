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
const timeBtn = document.querySelector(".time-btn");

settingBtn.addEventListener("click", settingShow);

let settingOpen = false;

function settingShow() {
  if (!settingOpen) {
    themeBtn.classList.add("open");
    timeBtn.classList.add("open");
    settingOpen = true;
  } else {
    themeBtn.classList.remove("open");
    timeBtn.classList.remove("open");
    settingOpen = false;
  }
}

// dark/light theme
const themeCheckBox = document.querySelector(".theme-checkbox");
const menuLinkTheme = document.querySelectorAll(".menu-link");
const contactLinkTheme = document.querySelectorAll(".contact-link");
const searchInputTheme = document.querySelector(".search-input");
const searchBtnTheme = document.querySelector(".search-btn");

themeCheckBox.addEventListener("change", themeChange);

function themeChange() {
  document.body.classList.toggle("light");
  menuLinkTheme.forEach(item => item.classList.toggle("light"));
  contactLinkTheme.forEach(item => item.classList.toggle("light"));
  searchInputTheme.classList.toggle("light");
  searchBtnTheme.classList.toggle("light");
}

// time
timeBtn.addEventListener("click", showTime);

function showTime() {
  window.alert(Date());
}