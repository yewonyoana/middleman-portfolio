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

// Scroll to top event
// Get the button:
const topBtn = document.getElementById("button-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    topBtn.style.display = "block";
    topBtn.style.transition = "all 0.15s ease-in";
  } else {
    topBtn.style.display = "none";
    topBtn.style.transition = "all 0.15s ease-out";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
