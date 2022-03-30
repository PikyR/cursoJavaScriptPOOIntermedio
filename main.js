// Curso Intermedio de Programación Orientada a Objetos en JS
// Clase 03
const lero = {
  name: "Leri",
  age: 88,
  approvedCourses: [
    "Curso A",
  ],

  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};

lero.age; // 88
lero.addCourse("Curso B"); // approvedCourses: [ 'Curso A', 'Curso B' ]

// Utilizando métodos estaticos del Prototipo: Objet
console.log(Object.keys(lero)); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ]

console.log(Object.getOwnPropertyNames(lero)); 
// [ 'name', 'age', 'approvedCourses', 'addCourse' ]

console.log(Object.entries(lero)); 
// [
//   [ 'name', 'Leri' ],
//   [ 'age', 88 ],
//   [ 'approvedCourses', [ 'Curso A', 'Curso B' ] ],
//   [ 'addCourse', [Function: addCourse] ]
// ]

console.log(Object.entries(lero)[3][1]);
// [Function: addCourse]

// Object.entries(lero)[3][1]("CursoError");
// TypeError: Cannot read properties of undefined (reading 'push')


console.log(Object.getOwnPropertyDescriptors(lero));

Object.defineProperty(lero, "propiedadPrueba", {
  value: "valorDePrueba",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(lero);