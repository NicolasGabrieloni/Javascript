
function convertir(){
    let moneda = prompt("ingrese a la moneda que desea convertir: dolar - euro - libra")
    let monto = parseInt(prompt("ingrese el monto que desea convertir"))
    console.log("resultado", conversor(monto, moneda))
}

function conversor(cantidad, moneda) { 
let dolar = 300;
let euro = 340;
let libra = 161;
if(moneda === "dolar"){
    return cantidad / dolar
}
if(moneda === "euro"){
    return cantidad / euro
}
if(moneda === "libra"){
    return cantidad / libra 
}else{
    alert("no existe tal moneda")
}
}

