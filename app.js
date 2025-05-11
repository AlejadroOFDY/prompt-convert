

function convertCurrency(pesos) {
    return resultado = ((pesos / 1300).toFixed(2) + " dólares")
}

let numero;

while (true) {
    numero = parseFloat(prompt("1) Divisa (ARS     -->USD)\n2) Salir"))
    switch (numero) {
        case 1:
            convertCurrency(parseFloat(prompt("Ingrese el monto que desea convertir: ")))
            alert(resultado)
            alert(pesos)
            break;
        case 2:
            alert("hola")
            break;
        default:
            alert("Opciones inválidas, nuevamente") 
    }
}



