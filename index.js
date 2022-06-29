const burger = document.querySelector(".burger");
const accesos = document.querySelector(".header-accesos");
const menuBurger = document.querySelector(".menu-burger");
const botonDescargar = document.querySelector("#boton-descargar");


burger.onclick = () =>{
    menuBurger.classList.toggle('display-flex')
    console.log("click burger");
}

botonDescargar.onclick = () =>{
    seccionFacturasDigitales.classList.toggle('display-flex')
    console.log("click en descargar");
}
