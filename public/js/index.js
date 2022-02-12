let catalogue = document.getElementById('catalogue')
let home = document.getElementById('home')
let message = document.querySelector('.message')
let glass = document.querySelector('.glass')
let glassMobile = document.querySelector('.glassMobile')
let glassMobile2 = document.querySelector('.glassMobile2')
let view = document.querySelector('.view')
let mobileView = document.querySelector('.mobileView')
let viewImg = document.querySelectorAll('.view div img')
let viewMobileImg = document.querySelectorAll('.mobileView img')

catalogue.addEventListener('click', (e) => {
    e.preventDefault()
    home.style.display = 'block'
    if (window.innerWidth <= '500') {
        message.classList.remove('animateReverse')
        glass.classList.remove('animateReverse')
        glassMobile.classList.remove('animateReverse')
        glassMobile2.classList.remove('animateReverse')
        message.classList.add('animate')
        glass.classList.add('animate')
        glassMobile.classList.add('animate')
        glassMobile2.classList.add('animate')
        setTimeout(() => {
            mobileView.style.display = 'flex'
            for (let i = 0; i < viewMobileImg.length; i++) {
                viewMobileImg[i].classList.remove('imageAnimateReverse')
                viewMobileImg[i].classList.add('imageAnimate')
            }
        }, 2000)
    } else {
        message.classList.remove('animateReverse')
        glass.classList.remove('animateReverse')
        glassMobile.classList.remove('animateReverse')
        glassMobile2.classList.remove('animateReverse')
        message.classList.add('animate')
        glass.classList.add('animate')
        glassMobile.classList.add('animate')
        glassMobile2.classList.add('animate')
        setTimeout(() => {
            view.style.display = 'flex'
            for (let i = 0; i < viewImg.length; i++) {
                viewImg[i].classList.remove('imageAnimateReverse')
                viewImg[i].classList.add('imageAnimate')
            }
        }, 2000)
    } 
})

// Reverse Animation
home.addEventListener('click', (e) => {
    e.preventDefault()
    home.style.display = 'none'
    if (window.innerWidth <= '500') {
        for (let i = 0; i < viewMobileImg.length; i++) {
            viewMobileImg[i].classList.remove('imageAnimate')
            viewMobileImg[i].classList.add('imageAnimateReverse')
        }
        setTimeout(() => {
            mobileView.style.display = 'none'
            message.classList.remove('animate')
            message.classList.add('animateReverse')
            glass.classList.remove('animate')
            glassMobile.classList.remove('animate')
            glassMobile2.classList.remove('animate')
            glass.classList.add('animateReverse')
            glassMobile.classList.add('animateReverse')
            glassMobile2.classList.add('animateReverse')
        }, 2000)
    } else {
        for (let i = 0; i < viewImg.length; i++) {
            viewImg[i].classList.remove('imageAnimate')
            viewImg[i].classList.add('imageAnimateReverse')
        }
        setTimeout(() => {
            view.style.display = 'none'
            message.classList.remove('animate')
            glass.classList.remove('animate')
            glassMobile.classList.remove('animate')
            glassMobile2.classList.remove('animate')
            message.classList.add('animateReverse')
            glass.classList.add('animateReverse')
            glassMobile.classList.add('animateReverse')
            glassMobile2.classList.add('animateReverse')
        }, 2000)
    } 
})
