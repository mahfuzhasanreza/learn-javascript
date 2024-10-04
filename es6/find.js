const players = [43, 54, 75, 49, 13];

const selected = players.find(player => player > 50);
const selected2 = players.find(player => player > 80);

console.log(selected, selected2);