function requiredParam(param) {
  throw new Error (param + " es obligatorio");  
}

function LearningPath({
  name = requiredParam("name"),
  courses = [],
} = {}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.socialMedia = {
    twitter,
    facebook,
    instagram,
  };
  this.approvedCourses = approvedCourses;
  
  if (Array.isArray(learningPaths)) {
    this.learningPaths = [];

    for (index in learningPaths) {
      if (learningPaths[index] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[index]);
      } else {
        console.warn(learningPaths[index].name + " - No es valido");
      }
    }
  }
}

const escuelaPrueba = new LearningPath({name: "Prueba 1"});
const escuelaPrueba2 = new LearningPath({name: "Prueba 2"});
const escuelaFalsa = {name: "Escuela Falsa"};

const estudiantePrueba = new Student({
  name: "Prueba", 
  email: "E@ma.il",
  learningPaths: [
    escuelaPrueba,
    escuelaFalsa,
    escuelaPrueba2
  ],
});
estudiantePrueba instanceof Student; // true

const estudianteFalso = {name: "Falso", email: "fal@so.com"};
estudianteFalso instanceof Student; // false

console.log(estudiantePrueba.learningPaths);
// LearningPath { name: 'Prueba 1', courses: [] },
// LearningPath { name: 'Prueba 2', courses: [] }
