/*8.Crear seis funciones, (sumar, restar, multiplicar, dividir, módulo, potencia), debe recibir 2 números e imprimir el resultado así: Ej entrada: 8, 4 Ej salida: 8 + 4 = 12
 */
function suma(a, b) {
  let resultado = a + b;
  console.log(`${a} + ${b} = ${resultado} `);
}
suma(5, 5);

function resta(a, b) {
  let resultado1 = a - b;
  console.log(`${a} - ${b} = ${resultado1}`);
}
resta(5, 5);

function multiplicacion(a, b) {
  let resultado2 = a * b;
  console.log(`${a} * ${b} = ${resultado2}`);
}
multiplicacion(5, 5);

function division(a, b) {
  let resultado3 = a / b;
  console.log(`${a} / ${b} = ${resultado3}`);
}
division(5, 5);

function modulo(a, b) {
  let resultado4 = a % b;
  console.log(`${a} % ${b} = ${resultado4}`);
}
modulo(5, 5);

function potencia(a, b) {
  let resultado5 = a ** b;
  console.log(`${a} ^ ${b} = ${resultado5}`);
}
potencia(5, 5);
