class Producto {
    constructor(id, proveedor, nombre, importe) {
        this.id = id
        this.proveedor = proveedor
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return "$ " + parseFloat((this.importe * IVA).toFixed(2))
    }
}

function creoID() {
    return parseInt(Math.random() * 100)
}


function agregarProductos() {
    let id = creoID()
    let proveedor = prompt("proveedor:")
    let descripcion = prompt("producto:")
    let importe = parseInt(prompt("importe:"))
        productos.push(new Producto(id, proveedor, descripcion, importe))
        console.table(productos)
}

function quitarProductos() {
    let aQuitar = parseInt(prompt("Indice del producto a quitar:"))
        productos.splice(aQuitar, 1)
        alert("se elimino el producto seleccionado")
}