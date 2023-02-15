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
    rootMargin: '-45px',
    threshold: 0.8,
};

const navObserver = new IntersectionObserver(navCallback, navOptions)

navObserver.observe(headerBlog);


//Comments Section
const commentParent = document.querySelector('.comments');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "August", "October", "November", "December"];

const date = new Date();

const currentDay = daysOfWeek[date.getDay()];
const currentMonth = monthsOfYear[date.getMonth()];
const dayOfMonth = date.getDate();
const currentYear = date.getFullYear();

const form = document.querySelector('.form');
const formName = document.querySelector('.form-input');
const formComment = document.querySelector('.form-input__text-area');
const postedComments = document.querySelector('.comments-posted')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newComment = document.createElement('div')
    newComment.classList.add('comments-block')

    const newImgBox = document.createElement('div')
    newImgBox.classList.add('comments-image-box')

    const newImg = document.createElement('img')
    newImg.src = `./Assets/comment-image${Math.floor(Math.random() * 46 + 1)}.jpg`;
    newImg.classList.add('comments-image-box__img')

    const newTextBox = document.createElement('div')
    newTextBox.classList.add('comments-text-box')

    const newTextBoxHeader = document.createElement('h4')
    newTextBoxHeader.classList.add('comments-text-box__header', 'u-margin-bottom-small')
    newTextBoxHeader.innerText = `${currentDay} ${currentMonth} ${dayOfMonth}, ${currentYear} by ${formName.value}`

    const newTextBoxBody = document.createElement('p')
    newTextBoxBody.classList.add('comments-text-box__body')
    newTextBoxBody.innerText = `${formComment.value}`

    postedComments.appendChild(newComment)
    newComment.appendChild(newImgBox)
    newComment.appendChild(newTextBox)
    newImgBox.appendChild(newImg)
    newTextBox.appendChild(newTextBoxHeader)
    newTextBox.appendChild(newTextBoxBody)


})
