const objOriginal = {
  a: "Original",
  b: "Original",
  c: {
    d: "Original",
    e: "Original"
  },
  f: "Agregado junto a la funcion editB()",

  editB() {
    this.b = "Edit desde la func editB "
  }
};

const primeraCopia = JSON.stringify(objOriginal);
// console.log(primeraCopia);
// {
//   "a":"Original",
//   "b":"Original",
//   "c":{
//     "d":"Original",
//     "e":"Original"
//   }
// }

const segundaCopia = JSON.parse(primeraCopia);
// console.log(segundaCopia);
// {
//   a: 'Original',
//   b: 'Original',
//   c: {
//     d: 'Original',
//     e: 'Original'
//   }
// }

objOriginal.a = "Mod desde Original";
// console.log(objOriginal);
// {
//   a: 'Mod desde Original',
//   b: 'Original',
//   c: { d: 'Original', e: 'Original' }
// }

// console.log(primeraCopia, segundaCopia);
// {"a":"Original","b":"Original","c":{"d":"Original","e":"Original"}}
// { a: 'Original', b: 'Original', c: { d: 'Original', e: 'Original' } }

console.log(primeraCopia, segundaCopia);
// {
//   "a":"Original",
//   "b":"Original",
//   "c":{"d":"Original","e":"Original"},
//   "f":"Agregado junto a la funcion editB()"
// }

// {
//   a: 'Original',
//   b: 'Original',
//   c: { d: 'Original', e: 'Original' },
//   f: 'Agregado junto a la funcion editB()'
// }
