const burger = document.querySelector(".burger");
const accesos = document.querySelector(".header-accesos");
const menuBurger = document.querySelector(".menu-burger");

burger.onclick = () =>{
    menuBurger.classList.toggle('display');
}

