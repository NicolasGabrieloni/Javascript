class Producto {
    constructor(proveedor, nombre, importe) {
        this.proveedor = proveedor
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return "$ " + parseFloat((this.importe * IVA).toFixed(2))
    }
}


function agregarProductos() {
    const formAddProd = document.getElementById("formAddProd")
    formAddProd.innerHTML += `
                                <input type="text" name="usuario" id="prov" placeholder="Proveedor">
                                <br>
                                <br>
                                <input type="text" name="usuario" id="Descr" placeholder="Descripcion">
                                <br>
                                <br>
                                <input type="text" name="usuario" id="Import" placeholder="Importe">
                                <br>
                                <input type="button" name="" value="Agregar" onclick="AddProd()">`
}
function AddProd() {
    let proveedor = document.getElementById("prov").value;
    let descripcion = document.getElementById("Descr").value;
    let importe = document.getElementById("Import").value;
    productos.push(new Producto(proveedor, descripcion, importe))
    Swal.fire({
        title: 'Agregado!',
        text: 'El producto fue agregado con exito',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
    console.table(productos)
}

function quitarProductos() {
    const formQuitProd = document.getElementById("formQuitProd")
    formQuitProd.innerHTML += `
                                <input type="text" name="usuario" id="prodQuit" placeholder="Indice del producto a quitar">
                                <br>
                                <input type="button" name="" value="Quitar" onclick="quitar()">`
}
function quitar() {
    productos.splice(prodQuit, 1)
    Swal.fire({
        title: 'Eliminado!',
        text: 'El producto fue eliminado con exito',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
}

function calcularIva() {
    let resultado = productos.map(producto => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            precioFinal: producto.importe * IVA
        }
    })
    console.table(resultado)
}

function generadorAutomatico() {
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "DE SANGRE MALBEC D.O.C", 18069))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "LUIGI BOSCA MALBEC 750 CC", 10661))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "DE SANGRE CABERNET FRANC", 25245))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "LUIGI BOSCA PINOT NOIR", 10657))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "APUNTES MALBEC ORGANICO", 27155))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "DE SANGRE RED BLEND", 21897))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "LUIGI BOSCA CABERNET SUAVIGNON", 12538))
    productos.push(new Producto("BODEGAS LUIGI BOSCA", "DE SANGRE MALBEC", 20196))

    productos.push(new Producto("BODEGAS NORTON", "NORTON MALBEC DOC", 1208))
    productos.push(new Producto("BODEGAS NORTON", "NORTON RESERVA MALBEC", 1500))
    productos.push(new Producto("BODEGAS NORTON", "NORTON ALTURA MALBEC", 2255))
    productos.push(new Producto("BODEGAS NORTON", "LOTE LA COLONIA MALBEC SINGLE VINEYARD", 4264))
    productos.push(new Producto("BODEGAS NORTON", "LOTE AGRELO MALBEC SINGLE VINEYARD", 4264))
    productos.push(new Producto("BODEGAS NORTON", "PEDRIEL SERIES MALBEC", 2172))
    productos.push(new Producto("BODEGAS NORTON", "NORTON RESERVA CABERNET SUAVIGNON", 1500))
    productos.push(new Producto("BODEGAS NORTON", "PEDRIEL SERIES CABERNET SUAVIGNON", 2172))

    productos.push(new Producto("BODEGAS BIANCHI", "MALBEC ORGANICO", 1153))
    productos.push(new Producto("BODEGAS BIANCHI", "FAMIGLIA BIANCHI CORTE UNICO", 1220))
    productos.push(new Producto("BODEGAS BIANCHI", "SELECCION EXCLUSIVOS", 1308))
    productos.push(new Producto("BODEGAS BIANCHI", "FAMIGLIA BIANCHI MALBEC", 1100))
    productos.push(new Producto("BODEGAS BIANCHI", "OASIS SUR MALBEC", 993))
    productos.push(new Producto("BODEGAS BIANCHI", "OASIS SUR CABERNET SUAVIGNON", 933))
    productos.push(new Producto("BODEGAS BIANCHI", "GENESIS MALBEC", 868))
    productos.push(new Producto("BODEGAS BIANCHI", "MIL PIEDRAS MALBEC", 1074))
}

function buscarStock() {
    let prod = prompt("producto a buscar:").toUpperCase()
    const resultado = productos.filter(elemento => elemento.nombre.includes(prod))
    console.table(resultado)
}

function listadoProductos() {
    console.table(productos)
}


function cargarTablaProductos() {
    generadorAutomatico()
    const cuerpo = document.getElementById("cuerpo")
    productos.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                <td>${producto.indexOf}</td>
                               <td>${producto.proveedor}</td>
                               <td>${producto.nombre}</td>
                               <td>$ ${producto.importe}</td>
                                <td>${producto.precioFinal()}</td>
                            </tr>`
    })
}

function cambiarIdioma() {
    tituloNav.innerText = "STOCK MANAGEMENT"
    tituloh2.innerText = "PRODUCT STOCK"
    btnNav.innerText = "Search"
    th1.innerText = "PROVIDER"
    th2.innerText = "PRODUCT"
    th3.innerText = "PRICE"
    th4.innerText = "TOTAL COST"
    btn1.innerText = "Add products"
    btn2.innerText = "Remove products"
    btn3.innerText = "Price with taxes"
    btnIdioma.innerText = "Change Language"
}

function validarUsuario() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("password").value;

    usuario == "CuchuParedes" && contraseña == "123456" ? window.location = "stock.html" : Swal.fire({
        title: 'Error!',
        text: 'usuario y contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente'
    })
}

function guardarDatos() {
    let usuarioR = document.querySelector("#usuarioR");
    let nombreR = document.querySelector("#nombreR");
    let passwordR = document.querySelector("#passwordR");

    localStorage.setItem("usuarioR", usuarioR.value)
    localStorage.setItem("nombreR", nombreR.value)
    localStorage.setItem("paswordR", passwordR.value)

    window.location = "stock.html";
}

function recuperarLS() {
    usuarioR.value = localStorage.getItem("usuarioR")
    nombreR.value = localStorage.gettItem("nombreR")
    passwordR.value = localStorage.getItem("paswordR")
}

function nuevoUsuario() {
    usuarioR.value = ""
    nombreR.value = ""
    passwordR.value = ""
    window.location = "stock.html";
}

function pedirdatosAlSv() {
    fetch('productos.json')
        .then((response) => response.json())
        .then((json) => console.table(json));

}


const cargarContenido = async () => {
    await fetch('productos.json')
        .then((response) => response.json())
        .then((data)=> {
            pf = data
            pf.forEach(contenido => {
                contenidoHtml += mostrarData(contenido)
            });
            cuerpo.innerHTML = contenidoHtml
        })
}

const mostrarData = (contenido) => {
    return `<tr>
                 <td>${contenido.Id}</td>
                 <td>${contenido.Proveedor}</td>
                 <td>${contenido.Producto}</td>
                 <td>$${contenido.Importe}</td>
                 <td>$${(contenido.Importe*IVA).toFixed(2)}</td>
             </tr>`
}