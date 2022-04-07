function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (const key in subject) {
    const keyIsObject = isObject(subject[key]);

    if(keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  }
};

const primerEstudiante = deepCopy(studentBase);

// Protegiendo para que no se pueda eliminar la propiedad "name"
// Object.defineProperty(primerEstudiante, "name",{
//   value: "Primerito",
//   configurable: false,
// });

// protegiendo todo el ojeto para que no se puedan eliminar TODAS sus propiedades 
Object.seal(primerEstudiante);

console.log(Object.isSealed(primerEstudiante)); // true
console.log(Object.isFrozen(primerEstudiante)); // false
