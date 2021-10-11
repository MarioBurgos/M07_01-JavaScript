var value = '';
var memory = '';
var smallDisplay;
var bigDisplay;


function init() {
    smallDisplay = document.getElementById("small-display");
    bigDisplay = document.getElementById("big-display");
}

/** 
 * Recibe el valor del botón que se acaba de pulsar y lo concatena a una variable.
 * Después lo pinta en el small-display
 * @param value, el valor del boton pulsado
 */
function displayOperation(value) {
    // siempre se pinta en el small-display
    // se controla si es el primer numero o si ya habia uno printado 
    smallDisplay.innerText += value;
    // console.log('value is ' + value);
}

/** Calcula la operación y pinta su resultado en el big-display y small-display  */
function displayResult() {
    var operation = smallDisplay.textContent;
    result = eval(operation);
    smallDisplay.innerText = result;
    bigDisplay.innerText = result;
}

/** Elimina el ultimo numero del small-display */
function deleteInput() {
    var operation = smallDisplay.textContent;
    operation = operation.slice(0, operation.length - 1);
    console.log(operation.charAt(operation.length - 1));
    smallDisplay.innerText = operation;
}

/** */
function resetOperation() {
    smallDisplay.innerText = '0';
    bigDisplay.innerText = 0
}

/**
 * Enseña alertas en la página.
 */