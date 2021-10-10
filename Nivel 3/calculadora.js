var value = '';
var operation = [];

/** 
 * Recibe el valor del botón que se acaba de pulsar y lo concatena a una variable.
 * Después lo pinta en el small-display
 * @param value, el valor del boton pulsado
 */
function displayOperation(value) {
    // siempre se pinta en el small-display
    // se controla si es el primer numero o si ya habia uno printado 
    if (document.getElementById("small-display").innerText != document.getElementById("big-display").innerText) {
        document.getElementById("small-display").innerText += value;
        operation.push(value);
    } else {
        document.getElementById("small-display").innerText = value;

    }

    console.log('value is ' + value);
}

/** Calcula la operación y pinta su resultado en el big-display y small-display  */
function displayResult() {
    var operation = document.getElementById("small-display").textContent;
    result = eval(operation); //  Cuidado con esta función `eval(string)` pues reduce la seguridad de la aplicación.  
    // TODO calcular el resultado de la operación mediante regex y split.
    document.getElementById("big-display").innerText = result;
    document.getElementById("small-display").innerText = result;

}


/**
 * Enseña alertas en la página.
 */