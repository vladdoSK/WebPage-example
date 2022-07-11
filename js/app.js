const burger = document.querySelector('.block_burger');
const nav = document.querySelector('.nav_block');

burger.addEventListener('click', function(e){
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});