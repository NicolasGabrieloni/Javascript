class Producto { //funcion constructora
    constructor(Id, Proveedor, Producto, Importe) {
        this.Id = Id
        this.Proveedor = Proveedor
        this.Producto = Producto
        this.Importe = Importe
    }
    precioFinal() {
        return "$ " + parseFloat((this.importe * IVA).toFixed(2))
    }
}


// FUNCIONES DE LA TABLA

function AddProd() {//Agrega un producto nuevo
    const Id = document.getElementById("id").value;
    const Proveedor = document.getElementById("prov").value;
    const Descripcion = document.getElementById("Descr").value;
    const Importe = document.getElementById("Import").value;


    if (Id.length == 0 || Proveedor.length == 0 || Descripcion.length == 0 || Importe.length == 0) {
        return Swal.fire({
            title: 'No hay nada que agregar!',
            text: 'porfavor, rellene todos los campos',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    } else {

        productos.push(new Producto(Id, Proveedor, Descripcion, Importe))
        console.table(productos)
        const cuerpo = document.getElementById("cuerpo")
        cuerpo.innerHTML = ""
        cargarTablaProductos()
        ProductosLSset()

        Swal.fire({
            title: 'Producto ingresado correctamente',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
        })
    }
}

function cargarTablaProductos() { //Carga tabla
    const cuerpo = document.getElementById("cuerpo")
    productos.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                <td>${producto.Id}</td>
                                <td>${producto.Proveedor.toUpperCase()}</td>
                                <td>${producto.Producto.toUpperCase()}</td>
                                <td>$${producto.Importe}</td>
                                <td>$${(producto.Importe * IVA).toFixed(2)}</td>
                            </tr>`
    })
}

function quitarProductos() { //elimina productos

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Producto a eliminar',
        html: `<input type="text" name="idprod" id="prodQuit" placeholder="ID del producto">`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {

        if (result.isConfirmed) {

            let idQuit = parseInt(document.getElementById("prodQuit").value);
            let Indice = productos.findIndex(ind => ind.Id === idQuit);
            productos.splice(Indice, 1)


            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'El producto ha sido eliminado correctamente.',
                'success'
            )
            cuerpo.innerHTML = ""
        cargarTablaProductos()
        } else if (

            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'El producto esta a salvo :)',
                'error'
            )
        }
    })
}

function calcularIva() { //calculo de IVA
    let resultado = productos.map(producto => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            precioFinal: producto.importe * IVA
        }
    })
    console.table(resultado)
}

const cargarContenido = async () => { //carga contenido traido de Fetch
    if(cuerpo.innerHTML == 0){ 
    await fetch('productos.json')
        .then((response) => response.json())
        .then((data) => {
            productos = data
            productos.forEach(contenido => {
                contenidoHtml += mostrarData(contenido)
            });
            cuerpo.innerHTML = contenidoHtml
        })
    } else {
    Swal.fire('La tabla ya esta cargada')
    }
}

const mostrarData = (contenido) => { // muestra el contenido traido de fetch
    return `<tr>
                 <td>${contenido.Id}</td>
                 <td>${contenido.Proveedor}</td>
                 <td>${contenido.Producto}</td>
                 <td>$${contenido.Importe}</td>
                 <td>$${(contenido.Importe * IVA).toFixed(2)}</td>
             </tr>`
}


//Funciones de Login

function validarUsuario() { //Login
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("password").value;
    
    let usuarioGuardado = localStorage.getItem("usuarioR");
    let passwordGuardado = localStorage.getItem("paswordR");
    
    if(usuario.value == "" || password.value == ""){
        Swal.fire({
            title: 'Los campos estan vacios!',
            text: 'Completar todos los campos',
            icon: 'error',
            confirmButtonText: 'Intentar nuevamente'
        })


    }  else if (usuario == "CuchuParedes"  && contraseña == "123456" || usuario == usuarioGuardado && contraseña == passwordGuardado ){
        
        window.location = "stock.html"
    } else {
    Swal.fire({
        title: 'Error!',
        text: 'Usuario y Contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente'
    })}
}

function ProductosLSset() {//Guarda PRODUCTOS en localStorage
    const prodsJson = JSON.stringify(productos)
    localStorage.setItem('Sproductos', prodsJson)
}

function guardarDatos() { // registro
    let usuarioR = document.querySelector("#usuarioR");
    let nombreR = document.querySelector("#nombreR");
    let passwordR = document.querySelector("#passwordR");

    if(usuarioR.value == "" || nombreR.value == "" || passwordR.value == ""){
        Swal.fire({
            title: 'Los campos estan vacios!',
            text: 'Completar todos los campos',
            icon: 'error',
            confirmButtonText: 'Intentar nuevamente'
        })
    } else { 

    localStorage.setItem("usuarioR", usuarioR.value)
    localStorage.setItem("nombreR", nombreR.value)
    localStorage.setItem("paswordR", passwordR.value)
    window.location = "stock.html";
}
}


// funcion de Idioma

function cambiarIdioma() {
    tituloNav.innerText = "STOCK MANAGEMENT"
    tituloh2.innerText = "PRODUCT STOCK"
    th1.innerText = "PROVIDER"
    th2.innerText = "PRODUCT"
    th3.innerText = "PRICE"
    th4.innerText = "TOTAL COST"
    btn1.innerText = "Add products"
    btn2.innerText = "Remove products"
    btn3.innerText = "Load product table"
    btnIdioma.innerText = "Change Language"
    btnSesion.innerText = "Sign off"

    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Si quiere volver al español refresque la pagina',
        showConfirmButton: false,
        timer: 1500
        })
}