function requiredParam(param) {
  throw new Error (param + " es obligatorio");  
}

function createStudentC11({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  facebook,
  instagram, 
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    email,
    age,
    socialMedia: {
      facebook,
      instagram,
      twitter,
    },
    approvedCourses,
    learningPaths,

    readName() {
      return private["_name"];
    },
  
    changeName(newName) {
      private["_name"] = newName;
    },
  };

  // Protegiendo contra modificaciones las funciones readName() y changeName()
  // aunque es contraproducente en un eventual polimorfismo
  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const estudianteC12 = createStudentC11({
  name: "Clase 12",
  email: "clase12@12.com",
})


estudianteC12.changeName("Nuevo Nombre")
console.log(estudianteC12.readName());