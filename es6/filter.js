const players = [43, 54, 75, 49, 13];

// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const selected = players.filter(p => p > 50);
const selected2 = players.filter(p => p > 80);
const selected3 = players.filter(p => p % 2 === 1);

console.log(selected, selected2, selected3);