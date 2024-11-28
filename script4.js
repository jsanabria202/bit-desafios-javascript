/*4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.
*/

function presentar(nombre, apellido, años = 100) {
  console.log(
    "su nombre es " + nombre + apellido + " y usted tiene " + años + " años"
  );
}
presentar("Javier ", "Sanabria", 22);
presentar("Javier ", "Sanabria");
