
let history = []

function convertCurrency(pesos) {
    resultado = ((pesos / 1300).toFixed(2))
    let objeto = {
    tipo: "divisa",
    entrada: [pesos],
    salida: [resultado],
    fecha: new Date().toLocaleString()
}
    history.push(objeto)
    return resultado
}

let numero;
let salida = true

while (salida) {
    numero = parseFloat(prompt("1) Divisa (ARS     -->USD)\n2) Salir"))
    switch (numero) {
        case 1:
            convertCurrency(parseFloat(prompt("Ingrese el monto que desea convertir: ")))
            alert(resultado)
            break;
        case 2:
            console.log(history)
            salida = false
            break;
        default:
            alert("Opciones inválidas, nuevamente") 
    }
}