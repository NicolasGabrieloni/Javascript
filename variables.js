const IVA = 1.21
const productos = []
const idioma = document.getElementById("tituloh2 tituloNav btnNav th1 th2 th3 th4 btnIdioma")

const botonAgregar = document.querySelector("#btn1")
const botonQuitar = document.querySelector("#btn2")
const botonTabla = document.querySelector("#btn3")
const botonIdioma = document.querySelector("#btnIdioma")


botonAgregar.addEventListener("click", ()=> {
    agregarProductos()
})
botonQuitar.addEventListener("click", ()=> {
    quitarProductos()
})
botonTabla.addEventListener("click", ()=> {
    cargarTablaProductos()
})
botonIdioma.addEventListener("click", ()=> {
    cambiarIdioma()
})


const btnRegistro = document.querySelector("#btnRegistro").value;

btnRegistro.addEventListener("click", ()=> {
    guardarDatos()
})