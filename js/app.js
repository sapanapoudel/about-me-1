'use strict';
var questions = [
  'Do I know Javascript?',
  'Do I know HTML5?',
  'Do I know CSS3?',
  'Do I know C#?',
  'Do I know NoSQL DB stuff?',
  'Do I know how to use docs?'
];
var totalQuestions = questions.length;
var correctAnswers = 0;
//var currentHref = window.location.href;

// for (let i = 0; i < questions.length; i++){
//   console.log('correct Answers:' + correctAnswers);
//   var res = prompt('Yes or no:\n' + questions[i]).toLowerCase();
//   console.log('user responded with: \n' + questions[i] + ' distilled to: ' + res[0]);
//   if (res[0] === 'y') {
//     correctAnswers++;
//     alert('Yup');
//   } else if (res[0] === 'n') {
//     alert('Nope!');
//   } else {
//     alert('Get off my page illitarate traveler!');
//     //This forces a redirect for not answering with a yes or no. In doing so, it compleatly overwrites the current url, removing the back funcitonallity. Here I'm pushing the current location into history
//     history.pushState(null, null, window.location.href);
//     console.log(currentHref);
//     //this forces a redirect for not answering with a yes or no.
//     window.location.href = 'https://www.google.com/search?ei=dPn2XLj7DOCU0PEPuta6oAk&q=can+I+attend+the+derek+zoolander+center+for+kids+who+can%27t+read+good+and+want+to+learn+how+to+do+other+stuff+good+too&oq=can+I+attend+the+derek+zoolander+center+for+kids+who+can%27t+read+good+and+want+to+learn+how+to+do+other+stuff+good+too';
//     break;
//   }
// }

var topping = prompt('What are the best toppings?').toLowerCase();
totalQuestions++;
var potentialPizzaAnswers = [
  'cheese',
  'pepperoni',
  'sausage',
  'chicken',
  'peppers'
];
console.log('preloops');
loop1:
for(var z = 0; z < 5; z++){
  console.log('in pizzaLoop:');
  //loop2:
  for(var i = 0; i<potentialPizzaAnswers.length; i++){
    console.log('in nested loop: ' + potentialPizzaAnswers[i] === topping);
    if (potentialPizzaAnswers[i] === topping){
      console.log('accepted topping' + topping);
      correctAnswers++;
      alert('thats a good one!');
      break loop1;
    }
  }
  topping = prompt('Try again \n What are the best toppings?').toLowerCase();
}

console.log('correct Answers:' + correctAnswers);
var random = Math.floor(Math.random() * 10) +1;
console.log('random number: ' + random);
var guess = null;
totalQuestions++;
do {
  console.log('guess: ' + typeof guess);
  console.log('random: ' + typeof random);
  console.log('guess !== random: ' + (guess !== random));
  guess = parseInt(prompt('pick a number between 1 and 10'), 10);
  if( guess<random){
    alert('low dude');
  } else if (guess> random){
    alert('high');
  }
  else if (guess === random){
    alert('You sank my battleship');
    correctAnswers++;
  }
  i++;
}
while (guess !== random && (i < 4));
//plus 2 for the number guesser game thing and the multiple choice.
alert('You got: ' + correctAnswers + ' out of ' + totalQuestions + ' right!');
