const hamburgerButton= document.getElementByID("hamburger")
const navlist= document.getElementByID("navlist")


function toggleButton() {
    navlist.classList.toggle("show")
}

hamburgerButton.addEventListener("click", toggleButton)