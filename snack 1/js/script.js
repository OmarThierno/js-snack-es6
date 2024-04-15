const bikesArrObj = [
  {
    name: 'modello-last',
    weight: 300,
  },
  {
    name: 'oltra-razzo',
    weight: 150,
  },
  {
    name: 'razzo',
    weight: 200,
  },
  {
    name: 'plutoBikes',
    weight: 100,
  },
  {
    name: 'razzo-3x',
    weight: 195,
  }
];

bikesArrObj.forEach((curBike) => {
  const {name, weight} = curBike;
  let counter = 0; 

  

  console.log(counter, name, weight);
})