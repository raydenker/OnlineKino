import slideMenu from './menu.js'
import renderVideo from './renderVideo.js'
slideMenu({
    openBtn: '.header__burger-btn',
    menu: '.navigation',
    classActive: 'navigation_active',
    closeTrigger: '.navigation__close, .navigation__link'
})

renderVideo()