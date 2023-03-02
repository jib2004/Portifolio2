// Nav display
const icon = document.getElementById('icon');
const list_container = document.querySelector('.list-container')
const desc = document.querySelector('.description')
const close_icon = document.getElementById('close_icon')
const about = document.getElementById('about')

// Pages
const price_col_1 =document.getElementById('price_col-1');
const price_col_2 =document.getElementById('price_col-2');
const price_col_3 =document.getElementById('price_col-3');

// Prices
const price_1 = document.getElementById('price-1');
const price_2 = document.getElementById('price-2');
const price_3 = document.getElementById('price-3');

// Hosting
const host_price_1 = document.getElementById('host_price-1');
const host_price_2 = document.getElementById('host_price-2');
const host_price_3 = document.getElementById('host_price-3');

// Total prices
const span_price_col_1 = document.getElementById('span_price_col-1');
const span_price_col_2 = document.getElementById('span_price_col-2');
const span_price_col_3 = document.getElementById('span_price_col-3');



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