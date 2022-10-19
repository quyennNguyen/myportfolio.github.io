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
  obj.classList.add("open");
  ed.classList.remove("open");
  tech.classList.remove("open");
});
objBtn.addEventListener("click", () => {
  obj.classList.add("open");
  ed.classList.remove("open");
  tech.classList.remove("open");
});
edBtn.addEventListener("click", () => {
  obj.classList.remove("open");
  ed.classList.add("open");
  tech.classList.remove("open");
});
techBtn.addEventListener("click", () => {
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
const profileTheme = document.querySelector(".section-nav");
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
  sectionNavTheme.classList.toggle("light");
  featureTheme.classList.toggle("light");
  searchInputTheme.classList.toggle("light");
  searchBtnTheme.classList.toggle("light");
  contactTheme.classList.toggle("light");
  contactLinkTheme.forEach((item) => item.classList.toggle("light"));
  topBtn.classList.toggle("light");
  downBtn.classList.toggle("light");
});

// function clickable(element1, element2) {
//   window.onclick = function(event) {
//     if (!event.target.matches(element1)) {
//       var targetEl = document.getElementsByClassName(element2);
//       var i;
  
//       for (i = 0; i < targetEl.length; i++) {
//         var openEl = targetEl[i];
  
//         if (openEl.classList.contains('open')) {
//           openEl.classList.remove('open');
//         }
//       }
//     }
//   }
// }