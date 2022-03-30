const objetoCoso = {
  age: 55,
  email: "coso@coso.com",
};

const copiaDeObbjetoCoso = objetoCoso;

// console.log(objetoCoso, copiaDeObbjetoCoso);
// { age: 55, email: 'coso@coso.com' } { age: 55, email: 'coso@coso.com' }

copiaDeObbjetoCoso.age = 3;
copiaDeObbjetoCoso.email = "copia@b.com";

console.log(copiaDeObbjetoCoso);
// { age: 3, email: 'copia@b.com' }

console.log(objetoCoso);
// { age: 3, email: 'copia@b.com' }


// Las variables son una referencia a un espacio en memoria. 
// Dependiendo del tipo de valor que sean 
// serán ubicadas en alguna de las dos tipos de memoria:

// Stack - Mucho más rápida, pero sin tanto espacio
// Heap - Más lenta, pero con mucho más espacio

// Las variables que no tienen un valor de tipo objeto, 
// son almacenadas en la memoria "stack". Las variables que tienen 
// como valor un objeto, funcionan de una manera diferente:

// El valor (objeto) es guardada en la memoria "heap"
// En la memoria "stack" se guarda un apuntador (pointer) hacia la memoria "heap"
// Es por esto que cuando nosotros asignamos una variable que tiene 
// como valor un objeto, a una nueva variable, lo unico que hacemos es 
// asignar el apuntador. Es así que al modificar el objeto, 
// en cualquiera de las dos variables, los cambios se reflejan en las dos

