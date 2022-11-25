// dark/light theme
const themeCheckBox = document.querySelector("#theme-checkbox");
const menuLink = document.querySelectorAll(".menu-link");
const about = document.querySelector("#about");
const feature = document.querySelector("#features");
const contact = document.querySelector("#contacts");
const contactLink = document.querySelectorAll(".contact-link");

themeCheckBox.addEventListener("change", () => {
  document.body.classList.toggle("light");
  menuLink.forEach((item) => item.classList.toggle("light"));
  about.classList.toggle("light");
  objBtn.classList.toggle("light");
  edBtn.classList.toggle("light");
  techBtn.classList.toggle("light");
  feature.classList.toggle("light");
  contact.classList.toggle("light");
  contactLink.forEach((item) => item.classList.toggle("light"));
});

// profile
const objBtn = document.getElementById("obj-btn");
const obj = document.getElementById("obj");
const edBtn = document.getElementById("ed-btn");
const ed = document.getElementById("ed");
const techBtn = document.getElementById("tech-btn");
const tech = document.getElementById("tech");

objBtn.onclick = () => {
  objBtn.style.fontWeight = "800";
  edBtn.style.fontWeight = "400";
  techBtn.style.fontWeight = "400";
  obj.style.display = "block";
  ed.style.display = "none";
  tech.style.display = "none";
};

edBtn.onclick = () => {
  objBtn.style.fontWeight = "400";
  edBtn.style.fontWeight = "800";
  techBtn.style.fontWeight = "400";
  obj.style.display = "none";
  ed.style.display = "block";
  tech.style.display = "none";
};

techBtn.onclick = () => {
  objBtn.style.fontWeight = "400";
  edBtn.style.fontWeight = "400";
  techBtn.style.fontWeight = "800";
  obj.style.display = "none";
  ed.style.display = "none";
  tech.style.display = "block";
};