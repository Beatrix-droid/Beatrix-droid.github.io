const hamburgerButton= document.getElementByID("hamburger")
const navList = document.getElementByID("nav")


function toggleButton() {
    navList.classList.toggle("show")
}

hamburgerButton.addEventListener("click", toggleButton)