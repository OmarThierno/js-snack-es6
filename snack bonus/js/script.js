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


let autoBen = [];
let autoDie = [];
let autoGpl = [];
let autoEle = [];
let autoMet = [];

automobili.forEach((curAuto, index) => {
  const {alimentazione, marca} = curAuto;

  if (alimentazione === 'benzina') {
    autoBen.push(curAuto)
  } else if (alimentazione === 'diesel') {
    autoDie.push(curAuto)
  } else if (alimentazione === 'gpl') {
    autoGpl.push(curAuto)
  } else if (alimentazione === 'elettrico') {
    autoEle.push(curAuto)
  } else if (alimentazione === 'metano') {
    autoMet.push(curAuto)
  } 
})

console.log(autoBen, autoDie, autoGpl, autoEle, autoMet);