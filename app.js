
let history = [] /* Array vacío, o lista como se llama en Python */

function convertCurrency(pesos) {
    resultado = ((pesos / 1300).toFixed(2))
    let objeto = {
    tipo: "divisa",
    entrada: [pesos],
    salida: [resultado],
    fecha: new Date().toLocaleString() /* Mostrará la fecha del momento */
}
    history.push(objeto) /* No olvidar que con ".push" se agrega elementos al array */
    return resultado
}

let numero; /* Creando una variable pero sin valor */
let salida = true /* Variable booleana que de no existir no se podría cambiar la condición del bucle */

while (salida) {
    numero = parseFloat(prompt("1) Divisa (ARS     -->USD)\n2) Salir"))
    switch (numero) {
        case 1:
            convertCurrency(parseFloat(prompt("Ingrese el monto que desea convertir: ")))
            alert(resultado)
            break; /* Este bucle continúa indifinidamente, mientras los registros se van guardando */
        case 2:
            console.log(history) /* Para que se muestre por consola (F12) */
            salida = false /* Evitará que el bucle continue sin parar */
            break;
        default:
            alert("Opciones inválidas, nuevamente") /* Si el usuario ingresa algo que no corresponda se muestra esto pero el bucle continuará*/
}
}