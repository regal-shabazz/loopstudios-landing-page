const hamburger_menu = document.querySelector('.menu__icon')
const mobile_nav = document.querySelector('nav')
const close_menu = document.querySelector('.close__menu')
const menu = document.querySelector('ul')
const each_menu = document.querySelectorAll('li')
const modal = document.querySelector('.modal')
const modal_closeBtn = document.querySelector('#modal__btn')

hamburger_menu.addEventListener("click", () => {
    mobile_nav.classList.toggle('active')
})

close_menu.addEventListener("click", () => {
    mobile_nav.classList.remove('active')
    modal.classList.remove('active')
})

each_menu.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.toggle('active')
        menu.classList.toggle('active')
    })
})

modal_closeBtn.addEventListener("click", () => {
    modal.classList.remove('active')
    menu.classList.toggle('active')
})