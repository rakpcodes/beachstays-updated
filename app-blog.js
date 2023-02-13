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

//Nav Background

const navbar = document.querySelector('.nav');
const headerBlog = document.querySelector('.header-blog-text');

const navCallback = (navEntry, navObserver) => {

    // Can also use !navEntry[0]... kept as false to represent the value seen in the console.
    if (navEntry[0].isIntersecting === false) {
        navbar.classList.add('nav-bg-on')
    } else {
        navbar.classList.remove('nav-bg-on')
    }
}

navOptions = {
    rootMargin: '-70px',
    threshold: 0.9,
};

const navObserver = new IntersectionObserver(navCallback, navOptions)

navObserver.observe(headerBlog);


//Comments Section
const commentParent = document.querySelector('.comments')
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "August", "October", "November", "December"];

const date = new Date()

const currentDay = daysOfWeek[date.getDay()]
const currentMonth = monthsOfYear[date.getMonth()]
const currentYear = date.getFullYear()

const form = document.querySelector('.form-comment')
const formSubmit = document.querySelector('.btn')

