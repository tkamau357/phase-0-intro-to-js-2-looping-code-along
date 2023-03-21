// Code your solutions in this file
function writeCards(names, eventName) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
  }

  const names = ['Guadalupe', 'Ollie', 'Aki'];
  const eventName = 'surprise';
  const cards = writeCards(names, eventName);
  console.log(cards);


function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
countDown(10);