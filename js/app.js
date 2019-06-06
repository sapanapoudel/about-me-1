'use strict';
var questions = [
  'Do I know Javascript?',
  'Do I know HTML5?',
  'Do I know CSS3?',
  'Do I know C#?',
  'Do I know NoSQL DB stuff?',
  'Do I know how to use docs?'
];
var totalQuestions = 0;
var correctAnswers = 0;

var askQuestion = function (question) {
  totalQuestions++;
  console.log('correct Answers:' + correctAnswers);
  console.log('question: ' + question);
  var res = prompt('Yes or no:\n' + question).toLowerCase();
  console.log('user responded with: \n' + question + ' distilled to: ' + res);
  if (res[0] === 'y') {
    correctAnswers++;
    alert('Yup');
  } else if (res[0] === 'n') {
    alert('Nope!');
  }
};

for (let i = 0; i < questions.length; i++) {
  askQuestion(questions[i]);
}

totalQuestions++;
var potentialPizzaAnswers = [
  'cheese',
  'pepperoni',
  'sausage',
  'chicken',
  'peppers'
];

var pizzaTopping = function (toppings) {
  totalQuestions++;
  var userResponse = prompt('What are the best toppings?').toLowerCase();

  loop1:
  for (var z = 0; z < 5; z++) {
    for (var i = 0; i < toppings.length; i++) {
      console.log('in nested loop: ' + toppings[i] === userResponse);
      if (toppings[i] === userResponse) {
        console.log('accepted topping' + userResponse);
        correctAnswers++;
        alert('thats a good one!');
        break loop1;
      }
    }
    userResponse = prompt('Try again \n What are the best toppings?').toLowerCase();
  }
};
pizzaTopping(potentialPizzaAnswers);


var numberGame = function () {
  console.log('correct Answers:' + correctAnswers);
  var random = Math.floor(Math.random() * 10) + 1;
  console.log('random number: ' + random);
  var guess = null;
  totalQuestions++;
  let i = 0;
  do {
    guess = parseInt(prompt('pick a number between 1 and 10'), 10);
    console.log('guess !== random: ' + (guess !== random));
    if (guess < random) {
      alert('low dude');
    } else if (guess > random) {
      alert('high');
    }
    else if (guess === random) {
      alert('You sank my battleship');
      correctAnswers++;
    }
    i++;
  }
  while (guess !== random && (i < 4));
};
numberGame();
alert('You got: ' + correctAnswers + ' out of ' + totalQuestions + ' right!');
