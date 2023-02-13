// Hamburger Menu

const hamburgerBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav-list-link');


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-active')
    mobileNav.classList.toggle('mobile-nav-active')
})

mobileNavLink.forEach((link) => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('hamburger-active')
        mobileNav.classList.toggle('mobile-nav-active')
    })
})

// Intersection Observers

const navbar = document.querySelector('.nav');
const headerText = document.querySelector('.header-text');

const navCallback = (navEntry, navObserver) => {

    // Can also use !navEntry[0]... kept as false to represent the value seen in the console.

    if (navEntry[0].isIntersecting === false) {
        navbar.classList.add('nav-bg-on')
    } else {
        navbar.classList.remove('nav-bg-on')
    }
}

navOptions = {
    rootMargin: '-60px',
    threshold: 0.9,
};

const navObserver = new IntersectionObserver(navCallback, navOptions)

navObserver.observe(headerText);
