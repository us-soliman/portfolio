import { el, all, crtEl, removeClass , addClass } from './var.js';





document.addEventListener('DOMContentLoaded', () => {
  defaultTheme()
  myLocal()
  all('.theme-buttons').forEach((el) => {
    if (el.classList.contains('drk')) {
      el.querySelector('.theme-buttons input').click()
    }
  })
  icons()
})

function defaultTheme() {
  if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
    dark()
  } else {
    light()
  }
}
function dark() {
  el('.cover nav a span').style.backgroundImage = `url('./image/Logo-light.png')`
  addClass(all('.background-art') , 'active')  
  addClass(all('.theme-buttons') , 'drk')  
  all('.theme-buttons i').forEach(i => i.dataset.theme == 'dark-theme' ? i.classList.add('active') : i.classList.remove('active'))
}

function light() {
  el('.cover nav a span').style.backgroundImage = `url('./image/Logo-dark.png')`
  removeClass(all('.background-art') , 'active')  
  removeClass(all('.theme-buttons') , 'drk')  
  all('.theme-buttons i').forEach(i => i.dataset.theme !== 'dark-theme' ? i.classList.add('active') : i.classList.remove('active'))
}

// ==================================== localStorage
function myLocal() {

  if ('theme' in localStorage) {
    if (localStorage.getItem('theme') !== '') {
      document.body.classList = `${localStorage.getItem('theme')}`
      if (localStorage.getItem('theme') == 'dark-theme') {
        dark()
      }
      if (localStorage.getItem('theme') == '-') {
        light()
      }
    }
  }
}
// ==================================== Add Theme

function icons() {

  all('.theme-buttons input').forEach((input) => {

    input.addEventListener('change', () => {

      if (input.checked) {
        localStorage.setItem('theme', `dark-theme`)
        document.body.classList = `dark-theme`
        dark()
      }
      else {
        localStorage.setItem('theme', `-`)
        document.body.classList = `-`
        light()
      }

      themeTransition()
    })
  })
}

function themeTransition() {
  document.documentElement.classList.add('transition')
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 500)
}



