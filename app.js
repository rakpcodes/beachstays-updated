const hamburgerBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav-list-link');


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-active')
    mobileNav.classList.toggle('mobile-nav-active')
})