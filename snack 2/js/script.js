const soccerTeam = [
  {
    nome: 'Messi',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Ronaldo',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Pippo',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Pluto',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Sileye',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

const newArray = [];

soccerTeam.forEach((curPlayer, index) => {
  curPlayer.puntiFatti = getRndInteger(1, 200);
  curPlayer.falliSubiti = getRndInteger(1, 200);

  const {nome, falliSubiti} = curPlayer;
  newArray.push({nome, falliSubiti});
})

console.log(newArray);