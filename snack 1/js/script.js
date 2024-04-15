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


let weightMin = bikesArrObj[0].weight;
let indexWeightMin = 0;

bikesArrObj.forEach((curBike, index) => {
  const {name, weight} = curBike;
  if (weight < weightMin) {
    weightMin = weight;
    indexWeightMin = index;
  } 
})

console.log(bikesArrObj[indexWeightMin].name, weightMin);

document.getElementById('result').innerHTML = `${bikesArrObj[indexWeightMin].name} ${weightMin}`;