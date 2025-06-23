// export function suma(a, b) {
//   return a + b;
// }

// export function resta(a, b) {
//   return a - b;
// }

// export function multiplicacion(a, b) {
//   return a * b;
// }
// export function division(a, b) {
//   return a / b;
// }
// // export function renderizar(cliente, elemento) {
// //   elemento.innerHTML += `<li>${cliente.nombre}</li>`;
// // }
// export function renderizarCars(cliente, elemento) {
//   let mayor = 0;
//   for (const client of cliente.compras) {
//     mayor = client > 1;
//   }
//   if (cliente.compras.length > 1 || mayor) {
//     const suma = cliente.compras.reduce((acc, val) => acc + val, 0);

//     elemento.innerHTML += `
//       <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
//           cliente.nombre
//         }</h5>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Edad: ${
//           cliente.edad
//         }</p>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Correo: ${
//           cliente.correo
//         }</p>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Compras: ${cliente.compras.join(
//           ", "
//         )}</p>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Total de compras: $${suma}</p>
//       </div>
//     `;
//   }
// }
