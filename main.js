'use strict';


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height; //높이 가져오기

//스크롤이 될때마다 이 함 수를 실행시켜줘
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});