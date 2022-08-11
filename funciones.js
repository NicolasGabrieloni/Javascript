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
    let proveedor = prompt("proveedor:").toUpperCase()
    let descripcion = prompt("producto:").toUpperCase()
    let importe = parseInt(prompt("importe:"))
    productos.push(new Producto(proveedor, descripcion, importe))
    console.table(productos)
}

function quitarProductos() {
    let aQuitar = parseInt(prompt("Indice del producto a quitar:"))
    productos.splice(aQuitar, 1)
    alert("se elimino el producto seleccionado")
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

function listadoProductos(){
    console.table(productos)
}
