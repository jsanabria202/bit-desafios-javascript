function suma(a, b) {
  return a + b;
}

// Función de resta
function resta(a, b) {
  return a - b;
}

// Función de multiplicación
function multiplica(a, b) {
  return a * b;
}

// Función de división
function divide(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

// Función de módulo
function modulo(a, b) {
  return a % b;
}

// Función de potencia
function potencia(a, b) {
  return Math.pow(a, b);
}

function calcularOperacion(operacion, a, b) {
  let resultado;
  switch (operacion) {
    case "suma":
      resultado = suma(a, b);
      console.log(`${a} + ${b} = ${resultado}`);
      break;
    case "resta":
      resultado = resta(a, b);
      console.log(`${a} - ${b} = ${resultado}`);
      break;
    case "multiplica":
      resultado = multiplica(a, b);
      console.log(`${a} * ${b} = ${resultado}`);
      break;
    case "divide":
      resultado = divide(a, b);
      if (resultado === "Error: División por cero") {
        console.log(resultado);
      } else {
        console.log(`${a} / ${b} = ${resultado}`);
      }
      break;
    case "modulo":
      resultado = modulo(a, b);
      console.log(`${a} % ${b} = ${resultado}`);
      break;
    case "potencia":
      resultado = potencia(a, b);
      console.log(`${a} ^ ${b} = ${resultado}`);
      break;
    default:
      console.log("Operación no válida");
      break;
  }
}
calcularOperacion("suma", 8, 4);
