let el = (el) => document.querySelector(el)
let all = (el) => document.querySelectorAll(el)
let crtEl = (el) => document.createElement(el)
let removeClass =  (elementName , className) => elementName.forEach( elm => elm.classList.remove(className))
let addClass =  (elementName , className) => elementName.forEach( elm => elm.classList.add(className))


export{
  el , all , crtEl , removeClass , addClass
}