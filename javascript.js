let linkContents = document.querySelectorAll(".tab-titles p");
let tabContents = document.querySelectorAll(".tab-contents");

let skillsTab = document.querySelector(".tab-contents.skills");
let experienceTab = document.querySelector(".tab-contents.experience");
let educationTab = document.querySelector(".tab-contents.education");

linkContents.forEach((element) =>
  element.addEventListener("click", function () {
    // the one that has the little red thing at the bottom
    let activeLink = document.querySelector(".tab-links.active-link");

    activeLink.classList.remove("active-link");
    element.classList.add("active-link");

    //

    if (element.classList.contains("skills")) {
      skillsTab.classList.add("active-tab");
      experienceTab.classList.remove("active-tab");
      educationTab.classList.remove("active-tab");
    } else if (element.classList.contains("experience")) {
      experienceTab.classList.add("active-tab");
      skillsTab.classList.remove("active-tab");
      educationTab.classList.remove("active-tab");
    } else {
      educationTab.classList.add("active-tab");
      experienceTab.classList.remove("active-tab");
      skillsTab.classList.remove("active-tab");
    }
  })
);

let openMenu = document.querySelector(".bx-menu");
let closeMenu = document.querySelector(".bx-x");
let sideMenu = document.querySelector("#side-menu");

openMenu.addEventListener("click", function () {
  sideMenu.classList.add("unhide");
});

closeMenu.addEventListener("click", function () {
  sideMenu.classList.remove("unhide");
});

// it hides the side menu when we scroll
window.onscroll = () => {
  sideMenu.classList.remove("unhide");
  if (window.scrollY >= 100) {
    document.querySelector("nav").classList.add("scroll-change-nav");
  } else {
    document.querySelector("nav").classList.remove("scroll-change-nav");
  }
};

let ulSelect = document.querySelector("ul");
let sideMenuNav = document.querySelector("nav");

// this hides the side bar when you click out of. The reason why we had to do 2 conditions is because the menu icon is outside the ul which has the style of the side bar
document.addEventListener("click", function (event) {
  // It checks if the clicked element (event.target) is not a descendant of the <nav> element stored in the sideMenuNav variable. It checks if the click did not occur inside the <nav> element or its children.
  if (!sideMenuNav.contains(event.target)) {
    ulSelect.classList.remove("unhide");
  }
});
