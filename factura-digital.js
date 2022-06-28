const botonBuscar = document.querySelector ("#buscar")
const modal = document.querySelector(".modal")
const cerrarModal = document.querySelector(".cerrar-modal")


botonBuscar.onclick = () =>{
    modal.style.display="flex"
}
cerrarModal.onclick = () =>{
    modal.style.display="none"
}