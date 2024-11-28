/*8.
 */
function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
function potencia(a, b) {
  return a ** b;
}
function ope(operacion, num1, num2) {
  if (operacion === "suma") {
    const res = suma(num1, num2);
    console.log(suma(num1 + " + " + num2 + " = " + res));
  }
  if (operacion === "resta") {
    console.log(resta(num1, num2));
  }
  if (operacion === "multiplicacion") {
    console.log(multiplicacion(num1, num2));
  }
  if (operacion === "division") {
    console.log(division(num1, num2));
  }
  if (operacion === "modulo") {
    console.log(modulo(num1, num2));
  }
  if (operacion === "potencia") {
    console.log(potencia(num1, num2));
  }
}
ope("suma", 5, 5);
ope("resta", 5, 5);
ope("multiplicacion", 5, 5);
ope("division", 5, 5);
ope("modulo", 5, 5);
ope("potencia", 5, 5);
