const objetoOriginal = {
  a: "A1",
  b: "B1",
  c: "C1",
  d: {
    E: "E",
    F: "F"
 }
};

const objetoDos = {};

for (prop in objetoOriginal) {
  objetoDos[prop] = objetoOriginal[prop];
}

// console.log(objetoOriginal, objetoDos);
// { a: 'A1', b: 'B1', c: 'C1' } { a: 'A1', b: 'B1', c: 'C1' }

objetoDos.a = "A2";
// console.log(objetoOriginal, objetoDos);
// { a: 'A1', b: 'B1', c: 'C1' } { a: 'A2', b: 'B1', c: 'C1' }


// Se agrego la propiedad d: {...} a objetoOriginal
// console.log(objetoOriginal, objetoDos);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'E', F: 'F' } } 
// { a: 'A2', b: 'B1', c: 'C1', d: { E: 'E', F: 'F' } }

objetoDos.d.E = "EEEE D10S";
// console.log(objetoOriginal, objetoDos);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F' } } 
// { a: 'A2', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F' } }


// Metodos estaticos de Object
const objetoTres = Object.assign({}, objetoOriginal);
// console.log(objetoOriginal,"\n",objetoTres);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F' } } 
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F' } }

objetoOriginal.d.F = "F ORIGINAL";
// console.log(objetoOriginal,"\n",objetoTres);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F ORIGINAL' } } 
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F ORIGINAL' } }

const objetoCuatro = Object.create(objetoOriginal);
// console.log(objetoOriginal,"\n",objetoCuatro);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F ORIGINAL' } } 
// {}

// El objetoCuatro "vacio", tiene las propiedades de objetoOriginal dentro de __proto__
// console.log(objetoOriginal.a,"\n",objetoCuatro.a);
// A1 
// A1

objetoCuatro.b = "bCuatro";
// console.log(objetoOriginal,"\n",objetoCuatro);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'F ORIGINAL' } } 
// { b: 'bCuatro' }

objetoCuatro.d.F = "fCuatro";
// console.log(objetoOriginal,"\n",objetoCuatro);
// { a: 'A1', b: 'B1', c: 'C1', d: { E: 'EEEE D10S', F: 'fCuatro' } } 
// { b: 'bCuatro' }