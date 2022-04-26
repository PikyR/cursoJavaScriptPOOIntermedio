function requiredParam(param) {
  throw new Error (param + " es obligatorio");  
}

function createStudentC13({
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

    // readName() {
    //   return private["_name"];
    // },

    get name() {
      return private._name;
    },
  
    // changeName(newName) {
    //   private["_name"] = newName;
    // },
    
    set name(newName) {
      if (newName.length > 4) {
        private._name = newName;  
      } else {
        console.warn("Tu nombre debe tener 4 caracteres minimo");
      }      
    },
  };

  // Protegiendo contra modificaciones las funciones readName() y changeName()
  // aunque es contraproducente en un eventual polimorfismo
  //
  // Object.defineProperty(public, "readName", {
  //   writable: false,
  //   configurable: false,
  // });
  
  // Object.defineProperty(public, "changeName", {
  //   writable: false,
  //   configurable: false,
  // });

  return public;
}

const prueba = createStudentC13({
  name: "prueba",
  email: "A@a.a"
});

prueba.name = "doscientos"; //Asignando un nuevo valor a name
// console.log(prueba.name); // doscientos

console.log(Object.getOwnPropertyDescriptors(prueba));