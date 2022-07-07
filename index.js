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
const botonSalirSeccionPagar = document.querySelector(".boton-salir-seccion-pagar")

burger.onclick = () =>{
    menuBurger.classList.toggle('display-flex')
    console.log("click burger");
}

// seccion facturas cambio entre secciones
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
}
// seccion facturas modal - busco facturas
botonBuscar.onclick = () =>{
    modal.style.display="flex"
}
cerrarModal.onclick = () =>{
    modal.style.display="none"
}
// vuelvo al inicio
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
}

// limito caracteres del input number telefono
const telefono =  document.getElementById('phone');
telefono.oninput=()=>{
    if(telefono.value.length > 12){
        telefono.value = telefono.value.slice(0, 12)
    }
}


// sucursales
const selectProvincias = document.querySelector(".select-provincias");
const selectLocalidades = document.querySelector(".select-localidades");

const selectTexto = document.querySelector("#select-texto");

selectProvincias.onchange =()=> {
    if (selectProvincias.value == "Buenos Aires") {

        selectLocalidades.innerHTML=
        `<option value="">LOCALIDADES</option>
        <option value="Ciudad Autonoma de Buenos Aires">CABA</option>
        <option value="San Nicolas">SAN NICOLAS</option>`
        console.log(selectLocalidades.value);
    } else if (selectProvincias.value == "Mendoza") {
        selectLocalidades.innerHTML=`
        <option value="">LOCALIDADES</option>
        <option value="Mendoza">MENDOZA</option>`
    } else if (selectProvincias.value == "Chaco") {
        selectLocalidades.innerHTML=`
        <option value="">LOCALIDADES</option>
        <option value="Resistencia">RESISTENCIA</option>`
    } else if (selectProvincias.value == "Corrientes") {
        selectLocalidades.innerHTML=`
        <option value="">LOCALIDADES</option>
        <option value="Corrientes">CORRIENTES</option>`
    } else {
        selectTexto.innerHTML=` No dispones de sucursales cercanas`
    }
            
    selectLocalidades.onchange =()=> {

        if (selectLocalidades.value == "Ciudad Autonoma de Buenos Aires") {
            console.log(selectLocalidades.value);
            selectTexto.innerHTML=`
            <p> Sucursales cercanas: </p>
            <ul>
                <li> Tucuman 536 LOCAL 413 - Asoc. Mutual Hogar Latino </li>
                <li> Av.Cordoba 947 - LATIN EXPRESS FINANCIAL SERVICE ARG SA</li>
            </ul>`
        }
        else if (selectLocalidades.value == "San Nicolas") {
            selectTexto.innerHTML=`
            <p> Sucursales cercanas: </p>
            <ul>
                <li> De La Nacion 340 - ASOC. MUTUAL EUROAMERICANA </li>
            </ul>`
        }
        else if (selectLocalidades.value == "Mendoza") {
            selectTexto.innerHTML=`
            <p> Sucursales cercanas: </p> 
            <ul>
                <li> Gutierrez 82 - VALENCIA JORGE FEDERICO </li>
            </ul>`
        }
        else if (selectLocalidades.value == "Resistencia") {
            selectTexto.innerHTML=`
            <p> Sucursales cercanas: </p> 
            <ul>
                <li> Juan B.Justo 282 - PREVISORA DEL PARANA SRL</li>
            </ul>`
        }
        else if (selectLocalidades.value == "Corrientes") {
            selectTexto.innerHTML=`
            <p> Sucursales cercanas: </p> 
            <ul>
                <li> Hipolito Irigoyen 1772 - PREVISORA DEL PARANA SRL</li>
            </ul>`
        }
    }
}


