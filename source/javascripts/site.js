// This is where it all goes :)
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
