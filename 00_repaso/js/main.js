const array = ["HTML", 15, true];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

const curso = {
  nombre: "HTML",
  duracion: 15,
  activo: true,
};
console.log(curso);

console.log(curso.nombre);
console.log(curso.duracion);
console.log(curso.activo);

const arrayDeObjetos = [
  {
    nombre: "HTML",
    duracion: 15,
    activo: true,
  },
  {
    nombre: "CSS",
    duracion: 20,
    activo: true,
  },
  {
    nombre: "JavaScript",
    duracion: 30,
    activo: false,
  },
];

console.log(arrayDeObjetos);

arrayDeObjetos.forEach((item) =>
  console.log(`${item.nombre} - ${item.duracion} - ${item.activo}`),
);
