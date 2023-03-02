// Nav display
const icon = document.getElementById('icon');
const list_container = document.querySelector('.list-container')
const desc = document.querySelector('.description')
const close_icon = document.getElementById('close_icon')
const about = document.getElementById('about')
const range = document.querySelectorAll('.range')

// Pages
const price_col_1 =document.getElementById('price_col-1');
const price_col_2 =document.getElementById('price_col-2');
const price_col_3 =document.getElementById('price_col-3');
//pages values
let num1;
let pages_1 = Number(price_col_1.value);
let pages_2 = Number(price_col_2.getAttribute('value'));
let pages_3 = Number(price_col_3.getAttribute('value'));
//Pages SetValues
// let pay1 = Number(price_col_1.setAttribute('values', num1))



// Prices
const price_1 = document.getElementById('price-1');
const price_2 = document.getElementById('price-2');
const price_3 = document.getElementById('price-3');

// value for prices
let p_1 = Number(price_1.getAttribute('aria-valuenow'));
let p_2 = Number(price_2.getAttribute('aria-valuenow'));
let p_3 = Number(price_3.getAttribute('aria-valuenow'));


// Hosting
const host_price_1 = document.getElementById('host_price-1');
const host_price_2 = document.getElementById('host_price-2');
const host_price_3 = document.getElementById('host_price-3');
//value for prices
let h_1 = Number(host_price_1.getAttribute('aria-valuenow'));
let h_2 = Number(host_price_2.getAttribute('aria-valuenow'));
let h_3 = Number(host_price_3.getAttribute('aria-valuenow'));


// Total prices
const span_price_col_1 = document.getElementById('span_price_col-1');
const span_price_col_2 = document.getElementById('span_price_col-2');
const span_price_col_3 = document.getElementById('span_price_col-3');

//
let T_A_1 = p_1 + h_1 ;
let T_A_2 = p_2 + h_2 ;
let T_A_3 = p_3 + h_3 ;

// console.log(pages_2)
// console.log(pages_3)

icon.addEventListener('click', ()=>{
    list_container.classList.add('navDisplay');
    desc.classList.add('margin_desc');
    about.classList.add('about_margin');
});

close_icon.addEventListener('click',()=>{
    list_container.classList.remove('navDisplay');
    desc.classList.remove('margin_desc');
    about.classList.remove('about_margin');

});

// price_col_1.addEventListener('keyup',(e)=>{
// //    let tp_1 =p__1 + p_1+h_1;
// //    let pay = Number(span_price_col_1.innerHTML) ;
// //    pay = 0 + tp_1;

// span_price_col_1.innerText = `$${T_A_1}`;
// console.log(pay1)
// console.log(T_A_1)
 

// })

 function pay1(value){
    span_price_col_1.innerText = `$${Number(value)* T_A_1}`;
    console.log(value)
    let minValue = parseInt(range.input[0].value)
    let maxValue = parseInt(range.input[0].value)

    
 }

 function pay2(value){
    span_price_col_2.innerText = `$${Number(value)* T_A_2}`;
    console.log(value)
    
 }


 function pay3(value){
    span_price_col_3.innerText = `$${Number(value)* T_A_3}`;
    console.log(value)
    
 }