const pSuma = document.querySelector(".suma");
const pResta = document.querySelector(".resta");
const pMultiplicacion = document.querySelector(".multiplicacion");
const pDivision = document.querySelector(".division");

let condicion = true;
do {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
    continue;
  }

  function suma(num1, num2) {
    if (num1 < 0 || num2 < 0) {
      return "No se pueden sumar números negativos.";
    } else if (num1 === 0 && num2 === 0) {
      return "No se puede sumar cero con cero.";
    } else {
      return num1 + num2;
    }
  }
  function resta(num1, num2) {
    if (num1 < 0 || num2 < 0) {
      return "No se pueden restar números negativos.";
    } else if (num1 === 0 && num2 === 0) {
      return "No se puede restar cero con cero.";
    } else {
      return num1 - num2;
    }
  }
  function multiplicacion(num1, num2) {
    if (num1 < 0 || num2 < 0) {
      return "No se pueden multiplicar números negativos.";
    } else if (num1 === 0 || num2 === 0) {
      return "No se puede multiplicar por cero.";
    } else {
      return num1 * num2;
    }
  }
  function division(num1, num2) {
    if (num2 === 0 || num1 === 0) {
      return "No se puede dividir por cero.";
    } else if (num1 < 0 || num2 < 0) {
      return "No se puede dividir números negativos.";
    } else {
      return num1 / num2;
    }
  }
  pSuma.textContent = `La suma es: ${suma(num1, num2)}`;
  pResta.textContent = `La resta es: ${resta(num1, num2)}`;
  pMultiplicacion.textContent = `La multiplicación es: ${multiplicacion(
    num1,
    num2
  )}`;
  pDivision.textContent = `La división es: ${division(num1, num2)}`;
  if (confirm("¿Desea realizar otra operación?")) {
    condicion = true;
  } else {
    condicion = false;
  }
} while (condicion);
