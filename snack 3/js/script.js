const automobili = [
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
  { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];


const autoBen = [];
const autoDie = [];
const autoGpl = [];
const autoEle = [];
const autoMet = [];

automobili.forEach((curAuto, index) => {
  const {alimentazione, marca} = automobili;

  if (curAuto.alimentazione === 'benzina') {
    autoBen.push(curAuto)
  } else if (curAuto.alimentazione === 'diesel') {
    autoDie.push(curAuto)
  } else if (curAuto.alimentazione === 'gpl') {
    autoGpl.push(curAuto)
  } else if (curAuto.alimentazione === 'elettrico') {
    autoEle.push(curAuto)
  } else if (curAuto.alimentazione === 'metano') {
    autoMet.push(curAuto)
  } 
})

console.log(autoBen, autoDie, autoGpl, autoEle, autoMet);