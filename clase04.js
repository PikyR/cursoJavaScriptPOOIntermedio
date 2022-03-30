class Student {
  constructor({
    name,
    age,
    approvedCourses = [],
  }) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }
  
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  print() {
    console.log(this);
  }
}

const primerEstudiante = new Student({
  name: "Primo",
  age: 77,
  approvedCourses: [
    "Primer Curso",
  ]
});

// primerEstudiante.print();
//Student { name: 'Primo', age: 77, approvedCourses: [ 'Primer Curso' ] }

Object.defineProperty(primerEstudiante, "primeraPropiedad",{
    value: "Enumerable: False",
    enumerable: false,
    writable: true,
    configurable: true,
  }
);
// Enumerable: False
// Object.keys - No imprimirá la propiedad
// Object.getOwnPropertyNames - Si imprime la propiedad
// Se puede editar/eliminar

Object.defineProperty(primerEstudiante, "segundaPropiedad",{
    value: "Writable: False",
    enumerable: true,
    writable: false,
    configurable: true,
  }
);
// Writable: False
// No se puede editar el valor 
// Se puede eliminar

Object.defineProperty(primerEstudiante, "terceraPropiedad",{
    value: "Configurable: False",
    enumerable: true,
    writable: true,
    configurable: false,
  }
);
// Configurable: False
// Se puede modificar
// No se puede eliminar

Object.defineProperty(primerEstudiante, "cuartaPropiedad",{
    value: "Todo: False",
    enumerable: false,
    writable: false,
    configurable: false,
  }
);
// Todo: False
// Object.keys - No lo imprime
// Object.getOwnPropertyNames - Si lo imprime
// No se puede modificar/eliminar

const segundoEstudiante = new Student({
  name: "Segund",
  age: 66,
});
Object.seal(segundoEstudiante);
// Le aplica el valor de configurable: false 
// a todas las propiedades de segundoEstudiante 
// No se puede eliminar

const tercerEstudiante = new Student({
  name: "Terce",
  age: 55,
});
Object.freeze(tercerEstudiante);
// Le aplica el valor de configurable: false y writable: false
// a todas las propiedades de tercerEstudiante 
// No se puede eliminar o editar


// primerEstudiante.print();
console.log(Object.getOwnPropertyDescriptors(primerEstudiante));