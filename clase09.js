const obj09 = {
  a: "ori",
  b: "ori",
  c: {
    d: "ori",
    e: "ori",
    f: {
      g: "ori",
    }
  },
  
  editG() {
    this.c.f.g = "Modificado con editG()"
  }
};

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