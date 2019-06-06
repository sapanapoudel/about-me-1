'use strict';
var questions = [
  'Do I know Javascript?',
  'Do I know HTML5?',
  'Do I know CSS3?',
  'Do I know C#?',
  'Do I know NoSQL DB stuff?'
];

var currentHref = window.location.href;

for (let i = 0; i < questions.length; i++){
  var res = prompt('Yes or no:\n' + questions[i]).toLowerCase();
  console.log('user responded with: \n' + questions[i] + ' distilled to: ' + res[0]);
  if (res[0] === 'y') {
    alert('Yup');
  } else if (res[0] === 'n') {
    alert('Nope!');
  } else {
    alert('Get off my page illitarate traveler!');
    //This forces a redirect for not answering with a yes or no. In doing so, it compleatly overwrites the current url, removing the back funcitonallity. Here I'm pushing the current location into history
    history.pushState(null, null, window.location.href);
    console.log(currentHref);
    //this forces a redirect for not answering with a yes or no.
    window.location.href = 'https://www.google.com/search?ei=dPn2XLj7DOCU0PEPuta6oAk&q=can+I+attend+the+derek+zoolander+center+for+kids+who+can%27t+read+good+and+want+to+learn+how+to+do+other+stuff+good+too&oq=can+I+attend+the+derek+zoolander+center+for+kids+who+can%27t+read+good+and+want+to+learn+how+to+do+other+stuff+good+too';
    break;
  }
}
var random = Math.floor(Math.random() * 10);
var guess = null;
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
    alert('you sank my battleship');
  }
}
while (guess !== random);
