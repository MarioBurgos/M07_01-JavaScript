var value;

/** Recibe el valor del botón que se acaba de pulsar y lo concatena a una variable.
 * Después lo pinta en el small-display
 * @param value, the value of the button that has just been pressed
 */
function smallDisplayValue(value) {

    this.value = value;
    document.getElementById("small-display").innerText += value + ' ';
}

/** Does the math  */
function bigDisplayValue(value) {
    document.getElementById("big-display").innerText = eval(value);
}