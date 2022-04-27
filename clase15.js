function requiredParam(param) {
  throw new Error (param + " es obligatorio");  
}

function createLearningPath({
  name = requiredParam("name"),
  courses = []
}) {
  const private = {
    "_name": name,
    "_courses": courses,
  };

  const public = {
    get name() {
      return private._name;
    },
  
    set name(newName) {
      if (newName.length > 4) {
        private._name = newName;  
      } else {
        console.warn("Tu nombre debe tener 4 caracteres minimo");
      }
    },

    get courses() {
      return private["_courses"];
    },


  };

  return public;
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
  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
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

    get name() {
      return private._name;
    },
  
    set name(newName) {
      if (newName.length > 4) {
        private._name = newName;  
      } else {
        console.warn("Tu nombre debe tener 4 caracteres minimo");
      }
    },

    get learningPaths() {
      return private._learningPaths;
    },

    set learningPaths(newLearningPath) {
      if (!newLearningPath.name) {
        console.warn("Learning path sin nombre! - Propiedad: name");
        return;
      }

      if (!newLearningPath.courses) {
        console.warn("Learning path sin cursos");
        return;
      }

      if (!Array.isArray(newLearningPath.courses)) {
        console.warn("Learning path no es una lista de cursos");
        return;
      }

      private._learningPaths.push(newLearningPath);
    },
  };
  return public;
}

const nuevoAlumno = createStudent({name: "Fantasmano", email: "fant@sma.boo"});

// Seteando un nuevo learning path para 'nuevoAlumno'
// la asignacion funciona, aunque el nuevo LP no sea una instancia de createLearningPath()
nuevoAlumno.learningPaths = {name: "Nueva escuela", courses: []};