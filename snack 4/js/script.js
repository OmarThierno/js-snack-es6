const person = [
  {
    name: 'pippo',
    lastname: 'verdi',
    age: 33,
  },
  {
    name: 'paperino',
    lastname: 'rossi',
    age: 18
  },
  {
    name: 'elsa',
    lastname: 'frosen',
    age: 15,
  },
];

personDrive = [];

person.forEach((curPers) => {
  if (curPers.age >= 18) {
    personDrive.push(curPers);
  };
})

console.log(personDrive);