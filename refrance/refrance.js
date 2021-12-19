
import { el, all, crtEl } from '../js/var.js'
// ////////////////////////////////////////
// ---------- reduce fanction  -------->
// ////////////////////////////////////////
// function calc(...numr) {
//     let res = [...numr].reduce((a, b) => a + b)
//     return res
// }
// console.log(calc(10, 20, 30))



////////////////////////////////////////
// ---------- fanction-------->
////////////////////////////////////////
function showDetails(a, b, c) {

    let arr = [a, b, c]
    let str = [], num = [], bool = []
    for (let i = 0; i < arr.length; i++) {

        typeof arr[i] === 'string' ? str.push(`Hello ${arr[i]}`) : ''
        typeof arr[i] === 'number' ? num.push(`You age is ${arr[i]}`) : ''
        typeof arr[i] === 'boolean' ? bool.push(arr[i]) : ''

        if (arr[i] === true) {
            bool = '"You are not avaliable For Hire"'
        }
        if (arr[i] === false) {
            bool = "You are avaliable For Hire"
        }
    }
    return [str , num , bool].join(' | ')
}

console.log(showDetails('osama', 38, true))
console.log(showDetails(38, 'osama', true))
console.log(showDetails(true, 'osama', 38))
console.log(showDetails(false, 38, 'osama'))



    // for (let li of all('ul.sections-titles li')) li.classList.remove('active')
    // getComputedStyle(section).backgroundColor
    // console.log(getComputedStyle(el('.cover')).getPropertyValue('color'))
    // let backColorSection = getComputedStyle(section).getPropertyPriority("background-color")
    // let backColorHeader = getComputedStyle(el('.cover')).getPropertyValue("background-color")
    // if (localStorage.length == 0) {}
    // for (let i = 0; i < localStorage.length; i++) {}
    // let themeTransition = () => {}


