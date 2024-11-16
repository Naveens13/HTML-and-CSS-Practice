document.addEventListener('DOMContentLoaded', function() {
    let mobile = document.querySelector('.mobile-menu');
    let ham = document.querySelector('.handburger-menu');

    ham.addEventListener('click', function(){
        mobile.classList.toggle('ham-active');
    })
})