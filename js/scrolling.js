import { el, all, crtEl, removeClass , addClass } from './var.js'

el('.cover').classList.add('on-top')

function intro() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {

      addClass(all('.cover') , 'container')  
      addClass(all('.cover') , 'sticky')  
      addClass(all('.cover.sticky nav') , 'container')  
      // el('header img').remove()
      activeElm('.fade-in', el('.cover.sticky'))

      if (el('.cover').classList.contains('on-top')) {
        window.scrollTo({
          top: 0,
          left: 0,
        })
      }
    }

    setInterval(() => {
      removeClass(all('.cover') , 'on-top')  
    }, 1000);

    // ------------------- Change Header color
    // for (let i = 0; i < all(' section').length; i++) {
    //   let section = all('section')[i]
    //   if (window.scrollY >= section.offsetTop) {
    //     if (section.dataset.change == "color-header") {
    //       el('.cover').style.backgroundColor = `var(--bk-l)`
    //     }
    //     else {
    //       el('.cover').style.backgroundColor = `var(--bk-m)`
    //     }
    //   }
    // }


    // ------------------- Activate the menu Button
    all('section').forEach((section, i) => {

      if (window.scrollY >= (section.offsetTop - 300)) {
        removeClass(all('ul.sections-icons li') , 'active')

        if (section.classList == all('ul.sections-icons li')[i].dataset.sec) {
          all('ul.sections-icons li')[i].classList.add('active')
        }
        // ------------------- Activate the title section
        if (section.getAttribute('class') == all('.bord')[i].dataset.title) {
          // console.log(all('.box .bord')[i])
          all('.bord')[i].classList.add('active')
        } else if (window.scrollY === 0) {
          removeClass(all('.bord') , 'active')
        }
      }
    })

    // ------------------- Show & Hide the menu
    if (window.scrollY >= (window.innerHeight - 50)) {
      el('ul.sections-icons').style.visibility = 'visible'
      el('ul.sections-icons').style.opacity = '1'
      el('ul.sections-icons').style.pointerEvents = 'all'
    } else {
      el('ul.sections-icons').style.display = 'hidden'
      el('ul.sections-icons').style.opacity = '0'
      el('ul.sections-icons').style.pointerEvents = 'none'
    }
    let z = Math.floor(window.scrollY / 15)
    el('.one-side-bannar').style.left = `-${z}%`

    activeElm('.fade-in', el('section.services'))
    activeElm('.fade-in', el('section.work-process'))
    activeElm('.fade-in', el('footer'))

    console.log(z)

  })
}
intro()

function activeElm(allElm, elmParent) {
  let elms = elmParent.querySelectorAll(allElm)
  if (window.scrollY >= elmParent.offsetTop / 1.2) {
    elms.forEach((elm) => elm.classList.add('active'))
  }
  else {
    elms.forEach((elm) => elm.classList.remove('active'))
  }
}

























