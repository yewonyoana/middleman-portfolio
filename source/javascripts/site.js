// This is where it all goes :)
// About hover event
const aboutDetail = document.getElementById("about-detail");

function handleMouseOver(event) {
  aboutDetail.innerText = "🇿🇦🇸🇮🇮🇩🇻🇳🇺🇸🇰🇷";
  aboutDetail.style.textDecoration = "none";
}

function handleMouseLeave(event) {
  aboutDetail.innerText = "six";
  aboutDetail.style.textDecoration = "underline";
}

aboutDetail.addEventListener("mouseover", handleMouseOver);
aboutDetail.addEventListener("mouseleave", handleMouseLeave);

// Tech stack click event
// const backendBtn = document.getElementById("btn-backend");
// const frontendBtn = document.getElementById("btn-frontend");
// const othersBtn = document.getElementById("btn-others");
// const techstackBackend = document.getElementById("techstack-backend");
// const techstackFrontend = document.getElementById("techstack-frontend");
// const techstackOthers = document.getElementById("techstack-others");

// const HIDDEN = "hidden";

// function handleBackendToggle() {
//   console.log("clicked");
//   techstackBackend.toggleAttribute(HIDDEN);
// }

// function handleFrontendToggle() {
//   techstackFrontend.toggleAttribute(HIDDEN);
// }

// function handleOthersToggle() {
//   techstackOthers.toggleAttribute(HIDDEN);
// }

// backendBtn.addEventListener("toggle", handleBackendToggle);
// frontendBtn.addEventListener("toggle", handleFrontendToggle);
// othersBtn.addEventListener("toggle", handleOthersToggle);
