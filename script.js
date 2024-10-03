const navbar = document.querySelector('.list');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.linkss');
const github =  document.querySelector('.github');




hamburger.addEventListener('click',()=>{
    
    navbar.classList.toggle('no-list');
    links.classList.toggle('no-link');
    github.classList.toggle('no-git');


})


