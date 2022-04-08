function requiredParam(param) {
  throw new Error (param + " es obligatorio");  
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  facebook,
  instagram, 
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  return {
    name, 
    email,
    age,
    socialMedia: {
      facebook,
      instagram,
      twitter,
    },
    approvedCourses,
    learningPaths,
  }
}

const estudianteClase10 = createStudent({
  name: "Estudiante 10",
  age: 22,
  email: "10@est.com",
  instagram: "___est",
})

// console.log(estudianteClase10);

const fantasma = createStudent({
  name: "Gasparin",
  email: "buu@uu.com"
});
console.log("Fantasma",fantasma);
