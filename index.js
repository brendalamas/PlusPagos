const burger = document.querySelector(".burger");
const accesos = document.querySelector(".header-accesos");
const menuBurger = document.querySelector(".menu-burger");
const botonDescargar = document.querySelector("#boton-descargar");

const header = document.querySelector("header")
const seccionCarrusel = document.querySelector(".seccion-carrusel")
const seccionBox = document.querySelector(".seccion-box")
const seccionImpuestos = document.querySelector(".seccion-impuestos")
const seccionSucursales = document.querySelector(".seccion-sucursales")
const seccionProductos = document.querySelector(".seccion-productos")
const contactanos = document.querySelector("#contactanos")
const footer = document.querySelector("footer")
const seccionFacturas = document.querySelector(".seccion-facturas")

const botonBuscar = document.querySelector ("#buscar")
const modal = document.querySelector(".modal")
const cerrarModal = document.querySelector(".cerrar-modal")

const botonAtras = document.querySelector(".boton-atras")


burger.onclick = () =>{
    menuBurger.classList.toggle('display-flex')
    console.log("click burger");
}

// seccion facturas 
botonDescargar.onclick=()=>{
    header.style.display = "none"
    seccionCarrusel.style.display = "none"
    seccionBox.style.display = "none"
    seccionImpuestos.style.display = "none"
    seccionSucursales.style.display = "none"
    seccionProductos.style.display = "none"
    contactanos.style.display = "none"
    footer.style.display = "none"
    seccionFacturas.style.display = "flex"
    console.log("click en descargar");
}

// seccion facturas modal
botonBuscar.onclick = () =>{
    modal.style.display="flex"
}
cerrarModal.onclick = () =>{
    modal.style.display="none"
}
botonAtras.onclick = () => {
    header.style.display = "flex"
    seccionCarrusel.style.display = "flex"
    seccionBox.style.display = "flex"
    seccionImpuestos.style.display = "flex"
    seccionSucursales.style.display = "flex"
    seccionProductos.style.display = "flex"
    contactanos.style.display = "flex"
    footer.style.display = "flex"
    seccionFacturas.style.display = "none"
    console.log("click en atras");
}