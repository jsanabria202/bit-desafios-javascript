/*13. Crear una función que reciba 2 números, imprimir si el primer número es
divisible por el segundo.
*/
function divisible(a, b) {
  if (a % b === 0) {
    console.log(`tu numero si es divisible`);
  } else {
    console.log(`tu numero no es divisible`);
  }
}

divisible(8, 4);
divisible(13, 2);
