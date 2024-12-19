/* 9.
Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia), cada función debe recibir 2 números y retornar un resultado según corresponda.
Crear otra función que reciba el nombre de la operación y 2 números, debe imprimir el resultado. Ej entrada: suma, 8, 4 Ej salida: 8 + 4 = 12
*/
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
multiplicar(10, 20);

function dividir(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function potencia(a, b) {
  return a ** b;
}

function ope(operacion, a, b) {
  let resultado;
  if (operacion === "suma") {
    resultado = sumar(a, b);
    console.log(`${a} + ${b} = ${resultado}`);
  } else if (operacion === "resta") {
    resultado = restar(a, b);
    console.log(`${a} - ${b} = ${resultado}`);
  } else if (operacion === "multiplicacion") {
    resultado = multiplicar(a, b);
    console.log(`${a} + ${b} = ${resultado}`);
  } else if (operacion === "division") {
    resultado = dividir(a, b);
    console.log(`${a} + ${b} = ${resultado}`);
  } else if (operacion === "modulo") {
    resultado = modulo(a, b);
    console.log(`${a} + ${b} = ${resultado}`);
  } else if (operacion === "potencia") {
    resultado = potencia(a, b);
    console.log(`${a} + ${b} = ${resultado}`);
  } else {
    console.log("Operación no válida");
  }
}
ope("suma", 5, 5);
ope("resta", 5, 5);
ope("multiplicacion", 5, 5);
ope("division", 5, 5);
ope("modulo", 5, 5);
ope("potencia", 5, 5);
