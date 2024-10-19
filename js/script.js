// Navbar
const navbar = document.querySelector("nav")
window.addEventListener('scroll', () => {
    if (window.scrollY > 56) {
        navbar.classList.add("s-Navbar")
    }
    else if (window.scrollY < 56) {
        navbar.classList.remove("s-Navbar")
    }
})