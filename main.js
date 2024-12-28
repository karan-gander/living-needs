document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



const menuBtn = document.querySelector("#menu-btn");
const menuNavBar = document.querySelector(".mobile-nav");
const closeIcon = document.getElementById("close-icon")
menuBtn.addEventListener("click",()=>{
  // console.log("kk")v
  menuBtn.style.display="none"
  closeIcon.style.display="block"
  
  menuNavBar.style.top="85px"
  menuNavBar.style.transition="all 1s ease-in-out"

  // menuNavBar.classList.add("show-nav")
})


closeIcon.addEventListener("click",()=>{
  menuBtn.style.display="block"
  closeIcon.style.display="none"

  menuNavBar.style.top="-235px"
  menuNavBar.style.transition="all 1s ease-in-out"
  
})






















const accordion = document.querySelector(".accordion");

accordion.addEventListener("mouseover", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const buttons = panelToActivate.parentElement.querySelectorAll("button");
  const contents =
    panelToActivate.parentElement.querySelectorAll(".accordion-content");

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

  panelToActivate
    .querySelector(".accordion-content")
    .setAttribute("aria-hidden", false);
}
