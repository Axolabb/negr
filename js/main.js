const burger_icon = document.querySelector('.burger-icon');
const burger_modal = document.querySelector('.burger-container');
const list_item = document.querySelectorAll('.header__item--modal')
const body = document.querySelector('body');
const gift = document.querySelector('.gift-spawn');
const cupcake_button = document.querySelector('.cupcake-button')
const gift_modal = document.querySelector('.gift__modal-container')
const X = document.querySelector('.cupcake-x')
const wrapper = document.querySelector('.wrapper')

burger_icon.addEventListener('click', () => {
    if(burger_icon.classList.contains('active'))  {
        burger_modal.classList.remove('visible');
        burger_icon.classList.remove('active');
        body.style.overflowY = 'hidden';
    }
    else{
        burger_modal.classList.add('visible');
        burger_icon.classList.add('active');
    }
})

list_item.forEach(item => {
    item.addEventListener('click', () => {
        burger_modal.classList.remove('visible');
        burger_icon.classList.remove('active');
    });
});

gift.addEventListener('click', () => {
    gift_modal.classList.add('visible')
    body.style.overflowY = 'hidden';
})
cupcake_button.addEventListener('click', () => {
    gift_modal.classList.remove('visible')
    body.style.overflowY = 'visible';
})
X.addEventListener('click', () => {
    gift_modal.classList.remove('visible')
    body.style.overflowY = 'visible';
})
wrapper.addEventListener('click', () => {
    gift_modal.classList.remove('visible')
    body.style.overflowY = 'visible';
})


let inputs = document.querySelector('.input-number');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);