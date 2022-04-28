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

  const private = {
    "_learningPaths": []
  };
  
  Object.defineProperty(this, "learningPaths",{
    get() {
      return private._learningPaths;
    },
  
    set(newLearningPath) {
      if (newLearningPath instanceof LearningPath) {
        private._learningPaths.push(newLearningPath);
      } 
      else {
        console.warn(newLearningPath.name + " - No es valido");
      }
    },
  });

  // if (Array.isArray(learningPaths)) {
  //   this._learningPaths = [];

    for (index in learningPaths) {
      this.learningPaths = learningPaths[index];
    }
  // }
}




const escuelaPrueba = new LearningPath({name: "Prueba 1"});
const escuelaPrueba2 = new LearningPath({name: "Prueba 2"});
const escuelaFalsa = {name: "Escuela Falsa"};
const escuelaFalsaDos = {name: "Escuela Falsa Dos"};

const estudiantePrueba = new Student({
  name: "Prueba", 
  email: "E@ma.il",
  learningPaths: [
    escuelaPrueba,
    escuelaFalsa,
    escuelaPrueba2,
    escuelaFalsaDos
  ],
});
estudiantePrueba instanceof Student; // true

const estudianteFalso = {name: "Falso", email: "fal@so.com"};
estudianteFalso instanceof Student; // false

console.log(estudiantePrueba.learningPaths);
// LearningPath { name: 'Prueba 1', courses: [] },
// LearningPath { name: 'Prueba 2', courses: [] }
