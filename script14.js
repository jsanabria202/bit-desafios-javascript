/* 14. Crear una función que reciba 1 número, imprimir si es negativo o si es
positivo o si es cero.
*/
function positivo(num1) {
  if (num1 > 0) console.log("el numero " + num1 + " es positivo");

  if (num1 === 0) console.log("el numero " + num1 + " es 0");
  if (num1 < 0) console.log("el numero " + num1 + " es negativo");
}

positivo(0);
positivo(5);
positivo(-10);
