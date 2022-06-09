function openMenu(nav, active) {
    nav.classList.add(active)
}
function closeMenu(nav, active) {
    nav.classList.remove(active)
}

function slideMenu({ openBtn, menu, classActive, closeTrigger }) {

    const burgerBtn = document.querySelector(openBtn)
    const navigation = document.querySelector(menu)
    const navClose = document.querySelectorAll(closeTrigger)

    burgerBtn.addEventListener('click', () => {
        openMenu(navigation, classActive)
    })
    navClose.forEach(btn => {
        btn.addEventListener('click', () => {
            closeMenu(navigation, classActive)
        })
    })
}
export default slideMenu