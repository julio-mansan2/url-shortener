const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelector('.menu__box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
    }
})