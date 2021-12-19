
import { el, all, crtEl, removeClass } from './var.js'
import * as theme from './theme.js';
import * as scroll from './scrolling.js';
// import * as ref from './refrance.js';


function sectionTitleList() {

  all('ul.sections-icons li').forEach((li) => {

    li.addEventListener('click', function () {
      removeClass(all('ul.sections-icons li') , 'active')
      this.classList.add('active')
      all('section').forEach(sect => {
        if (this.dataset.sec == sect.classList) {
          console.log(sect.classList)
          window.scrollTo({
            top: sect.offsetTop,
            left: 0,
            behavior: 'smooth'
          })
        }
      })
    })
  })
}
el('.box-menu').addEventListener('click' , function() {
  this.classList.toggle('close')
  if(this.classList.contains('close')){
    el('.titlez-icon h5.close').style.display = 'block'
    el('.titlez-icon h5.open').style.display = 'none'
    el('aside').classList.add('open')
  }else{
    el('.titlez-icon h5.close').style.display = 'none'
    el('.titlez-icon h5.open').style.display = 'block'
    el('aside').classList.remove('open')
  }
})

sectionTitleList()

document.addEventListener('mousemove', (e) => {
  // console.log(e)
  el('.cursor').style.left = `${e.pageX}px`
  el('.cursor').style.top = `${e.pageY}px`
})


// function workProcess(){
//     all('.box-progress ul li i').forEach( (icon, i) => {
//         icon.addEventListener('click' , (e) =>{
//             removeClass(all('.box-progress ul li'))
//             e.target.closest('.box-progress ul li').classList.add('active')
//             removeClass(all('.box-progress .info'))
//             all('.box-progress .info')[i].classList.add('active')
//         })
//     })
// }

// workProcess()






















// function toto (usaername ='hhhh', age = 'hhhh', jop = 'hhhh'){
//   return `my Nmae is ${usaername}, your Age is ${age}, and you work as ${jop}`
// }
// console.log(toto('osama'));
// console.log(toto('osama','37','teacher'))

// function AddAll(...parms){
//   let number = 0;
//   for(let ss of parms )
//   number += ss;
//   return number;
// }
// console.log(AddAll(1,30))
// /////////////////////////////////////////////////////
// let x = 'hello from javascript';
// console.log(x.startsWith('h')); /// .startsWith
// console.log(x.startsWith('from',6)); /// .startsWith
// console.log(x.endsWith('pt')); /// .endsWith
// console.log(x.endsWith('from',6)); /// .endsWith   تنتهى حتى الحرف رقم 6 from هل 
// console.log(x.includes('from',6)); /// .includes   تبدأ من 6 from هل 
// console.log(x.includes('from',7)); /// .includes   تبدأ من 7 from هل 
// console.log(x.repeat(3)); /// .repeat يكرر الجمله   

// console.log(`${"11".repeat(30)}`)////////////////////////////////

// let user = {
//   name : 'osama',
//   age : '37',
//   jop : 'Teacher',
//   gender : 'male',
//   city : 'banha',
//   web : 'www.ggoo'
// }
// const {age , city , web = 'www.samoz.com'} = user;
// console.log(`${age} , ${web}`)

// console.log(`${"22".repeat(30)}`)////////////////////////////////

// let details = ["red", "good", "tasche"];
// let [one , ...gold] = details;
// console.log(`${one} , ${gold}`);

// console.log(`${"33".repeat(30)}`)////////////////////////////////

// let s = new Set([1,2,3,4,5,4,4]);
// let d = [1,2,3,4,5,4,4]
// console.log(s)
// console.log(d);
// console.log([...d]);

// console.log(`${"44".repeat(30)}`)////////////////////////////////

// let myMap = new Map([
//   ["osama", "37"],
//   [40,"kamal" ],
//   ["City", false],
//   ["gool", function toto(){}],
// ]);

// console.log(myMap.has("osama"));
// console.log(myMap.size);
// console.log(myMap.get(40));
// console.log(myMap.delete(40));
// console.log(myMap.size);

// console.log(`${"#".repeat(30)}`)////////////////////////////////

// const arr = ["A" , "b" ,  , "d" , "e" , "f" , "g"];
// for (let i = 0 ; i < arr.length ; i++) {
//   console.log(`${i} - ${arr[i]}`)
// }

// console.log(`${"#".repeat(30)}`)////////////////////////////////

// arr.forEach((el,i) => {
//   console.log(`${el} - ${i}`)
// });

// console.log(`${"#".repeat(30)}`)////////////////////////////////

// let myset = new Set([[1,1],1,2,2,2,3,3,4,4,5])
// myset.forEach((v , k) => {
//   console.log(`${v} - ${k}`)
// });

// console.log(`${"#".repeat(30)}`)////////////////////////////////

// let mymap = new Map([ ["sony", 21] ,["Toshiba", 54] ,["loge", "9"],["samsung",{}] ])
// mymap.forEach((va , ke) => {
//   console.log(`${ke} - ${va}`)
// });

// console.log(`${"#".repeat(30)}`)////////////////////////////////

// let mainObject = {A : 1};
// let myset1 = new Set ([mainObject]);

// let objectOne = {B : 2};

// let objectTwo = {C : 4};

// myset1.add(objectOne)
//   .add(objectTwo)
//   .add("good")
//   .add(10)

// console.log(`${myset1.has("good")}`);
// console.log(myset1);

// console.log(`${"#".repeat(30)}`)//////////////////////////////// 29 الدرس

// let myMap1 = new Map();
// let objectThree = {1 : 10}

// myMap1.set("10",10)
//   .set(false , "bolla")
//   .set(objectThree, "testy")
//   .set(function tot(){}, "fun")
// console.log(myMap1);
// console.log(`${myMap1.get(objectThree)}`);
// console.log(`${myMap1.get("10")}`);
// console.log(`${myMap1.has("10")}`);
// myMap1.delete("10");
// console.log(`${myMap1.has("10")}`);
// objectThree = null;
// console.log(`${myMap1.get(objectThree)}`);
// console.log(`${myMap1.has(objectThree)}`);
// console.log(`${myMap1.size}`);

// console.log(`${"#".repeat(30)}`)//////////////////////////////// 30 الدرس

// let Xarry = [1,2,3,4,5]; /// الرقم يجز له for
// let Xtxt = "osama"; /// الرقم يجز له for
// let Xnum = 1234; /// الرقم لا يجز له for
// let XObj = {}; /// الرقم لا يجز له for

// for ( let chr of Xtxt){
//   console.log(chr)
// }

// // for ( let num of Xnum){
// //     console.log(num)
// // }

// console.log(`${"88 ".repeat(30)}`)//////////////////////////////// 37-36 الدرس

// let Xmunbr = [10 ,20 ,30 ,40 ,50 ,60];
// let Xlettr = ["A" ,"B" ,"30" ,"40" ,"50" ,"60"];

// let ArryFrom = Array.from(Xmunbr , uu => uu - 5);
// console.log(ArryFrom)

// let ArryFill = Xmunbr.fill(900 , 1,3); /// will replace 20 & 30
// console.log(ArryFill)

// let Arryfind1 = Xmunbr.find(el => el > 20);
// console.log(Arryfind1)

// let Arryfind2 = Xmunbr.findIndex(el => el > 20);
// console.log(Arryfind2)

// let ArryCopyWthin = Xlettr.copyWithin(3, 0,2);
// console.log(ArryCopyWthin)

// console.log(`${"99".repeat(30)} `)//////////////////////////////// 26 الدرس

// let ryry = ["A", "B" , "C" , "D" ,  , "F"];


// for(let i = 0; i < ryry.length; i++){
//   console.log(`${i} - ${ryry[i]}`)
// }

// console.log(`${"-".repeat(30)}`)//-----

// function makeLoop(el , indx) {
//   console.log(`${indx} , ${el}`)
// }

// ryry.forEach(makeLoop)