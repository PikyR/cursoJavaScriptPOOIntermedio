// Recursividad

// function funcionRecursivaEjemplo() {
//   if (/* validacion */) {
//     // llamados recrusivos
//   } else {
//     // llamados sin recursividad
//   }
// }

const arreglo = [00,11,22,33,44,55,6677,88,99];
let n = 0;

for (let i = 0; i < arreglo.length; i++) {
  n = arreglo[i];
  console.log({i, n});;  
}

// Salida
// { i: 0, n: 0 }
// { i: 1, n: 11 }
// ...
// { i: 8, n: 99 }

const arreglo2 = [0,111,222,333,444,555,666];

function recursiva(parametroArreglo) {
  if (parametroArreglo.length != 0) {
    const primerElemento = parametroArreglo[0];
    console.log(primerElemento);

    parametroArreglo.shift();
    
    return recursiva(parametroArreglo);
  }
}

recursiva(arreglo2);
// Salida 
// 0
// 111
// ...
// 666
