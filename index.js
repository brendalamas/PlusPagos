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

const botonIngresar = document.querySelector(".ingresar");


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


// ingresar a un cuenta
const inputUsuario = document.querySelector("#usuario")
const inputClave = document.querySelector("#clave")
const ingresarCuenta = document.querySelector(".ingresar-cuenta")
const panelIngreso = document.querySelector(".panel-ingreso")
const cuentaIngresada = document.querySelector(".cuenta-ingresada")
const anuncio = document.getElementById("anuncio");


const cuentas = [
    {
        usuario : "admin1",
        clave : 123456789
    },
    {
        usuario : "admin2",
        clave : 52689653
    },
    {
        usuario : "admin3",
        clave : 15248269
    },
    {
        usuario : "admin4",
        clave : 14145858
    },
    {
        usuario : "admin5",
        clave : 98745632
    },
    {
        usuario : "admin6",
        clave : 45698562
    },
    {
        usuario : "admin7",
        clave : 25635636
    },
    {
        usuario : "admin8",
        clave : 78989636
    },
    {
        usuario : "admin9",
        clave : 12542524
    },
    {
        usuario : "admin0",
        clave : 45458577
    }
]

let contadorIngreso=0;

botonIngresar.onclick = () => {

    for (let i = 0; i < cuentas.length; i++) {
        if(inputUsuario.value == cuentas[i].usuario && inputClave.value == cuentas[i].clave) contadorIngreso++;
    }
    
    // si el usuario es correcto, ingrese a los datos
    if (contadorIngreso>=1) { 
        cuentaIngresada.innerHTML=`
            <h2>Bienvenido, ${inputUsuario.value}!</h2>
            <p>Saldo disponible</p>
            <p>$50.565,05</p>
            <button class="boton-salir-cuenta"> SALIR </button>
        `
        ingresarCuenta.style.display="none"
        anuncio.style.display="none"

        // click salir y para volver a seccion cuentas
        const botonSalirCuenta = document.querySelector(".boton-salir-cuenta");

        botonSalirCuenta.onclick = () =>{
            ingresarCuenta.style.display="flex";
            cuentaIngresada.style.display="none";
            inputUsuario.value = "";
            inputClave.value="";
            anuncio.style.display="flex"

        }
    }else{anuncio.innerText="Usuario y/o Clave incorrectos. Vuelve a intentar"}
}


    