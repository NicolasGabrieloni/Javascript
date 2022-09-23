const IVA = 1.21
let productos = []


const idioma = document.getElementById("tituloh2 tituloNav btnNav th1 th2 th3 th4 btnIdioma")
const botonAgregar = document.querySelector("#btn1")
const botonQuitar = document.querySelector("#btn2")
const botonTabla = document.querySelector("#btn3")
const botonIdioma = document.querySelector("#btnIdioma")
const URL = "productos.json"
    let contenidoHtml = ""

botonAgregar.addEventListener("click", ()=> {
    AddProd()
})
botonQuitar.addEventListener("click", ()=> {
    quitarProductos()
})
botonTabla.addEventListener("click", ()=> {
    cargarContenido()
})
botonIdioma.addEventListener("click", ()=> {
    cambiarIdioma()
})

const btnRegistro = document.querySelector("#btnRegistro").value;
btnRegistro.addEventListener("click", ()=> {
    guardarDatos()
})
